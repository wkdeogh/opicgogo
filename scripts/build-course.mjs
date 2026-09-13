import fs from 'node:fs';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = fs.readFileSync(path.join(root, 'opic종합정리.md'), 'utf8').replace(/\r\n/g, '\n');
export const plain = text => text.replace(/\\([\\`*_{}\[\]()#+.!~>&-])/g, '$1').replace(/\*\*/g, '').trim();
const escape = text => text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inline = text => escape(text.replace(/\\([\\`*_{}\[\]()#+.!~>&-])/g, '$1')).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
const lines = source.split('\n');
const sections = [];
let current, stack = [];
lines.forEach((line, index) => {
  const heading = line.trim().match(/^(#{1,4})\s+(.+)/);
  if (heading) {
    const level = heading[1].length;
    stack = stack.filter(item => item.level < level);
    stack.push({level, title: plain(heading[2])});
    current = {heading: line, title: plain(heading[2]), path: stack.map(item => item.title), start: index + 1, lines: []};
    sections.push(current);
  } else if (current) current.lines.push(line);
});

export const groups = [
  {id:'strategy', title:'시험 전략 · Survey', description:'설문 선택, 고득점 전략, 문제 유형'},
  {id:'flow', title:'유형별 답변 구조', description:'묘사부터 경험, 비교, 롤플레이까지'},
  {id:'patterns', title:'문장력 · 영작', description:'관계사, 현재완료, 수동태, 비교급·최상급'},
  {id:'expressions', title:'어휘 · 숙어 · 연결어', description:'동의어, 필러와 바꿔 쓰는 표현'},
  {id:'scripts', title:'묘사 · 비교 · 사회 이슈', description:'유형별 스크립트와 주제별 소재'},
  {id:'unexpected', title:'돌발 · 날씨와 교통', description:'묘사, 활동, 변화와 문제 경험'},
  {id:'roleplay', title:'롤플레이', description:'질문 → 문제 해결 → 관련 경험'}
];
function category(section) {
  const p = section.path.join(' / ');
  if (/유형별 답변 구조/.test(p)) return 'flow';
  if (/문장력 올리기/.test(p)) return /STRUCTURES/.test(p) ? 'patterns' : 'expressions';
  if (section.path[0] !== '유형별 예시 문제와 답변 스크립트') return 'strategy';
  if (/롤플레이/.test(section.path[1] || '')) return 'roleplay';
  if (/돌발/.test(section.path[1] || '')) return 'unexpected';
  if (/특정 사람|바로 바꿔/.test(p)) return 'expressions';
  return 'scripts';
}
function displayTitle(title) {
  return title.replace(/^\d+\.\s*/, '').replace(/\[\[\[\s*|\s*\]\]\]/g, '').replace(/^\[|\]$/g, '')
    .replace('For higher level', '고득점 필수 요소').replace('STRUCTURES', '문장 구조')
    .replace('BUILDING UP VOCABULARY', '어휘 업그레이드').replace('CONNECTIVE WORDS', '연결어')
    .replace('IDIOMS', '숙어 29').replace('FILLERS', '필러 14');
}
function meaningful(line) {
  return line.trim() && !/^(<\/?aside>|[💡👉]|\\?---|>\s*)$/.test(line.trim());
}
function contentLine(line) { return line.trim().replace(/^>\s?/, ''); }

function blocksFor(rawLines, base) {
  const result = [];
  for (let i = 0; i < rawLines.length;) {
    const raw = rawLines[i], line = contentLine(raw);
    if (!meaningful(raw)) { i++; continue; }
    if (line.startsWith('|')) {
      const rows = [], sourceLines = [];
      while (i < rawLines.length && contentLine(rawLines[i]).startsWith('|')) {
        const row = contentLine(rawLines[i]);
        if (!/^\|[\s:|\-]+\|$/.test(row)) {
          rows.push(row.slice(1, -1).split('|'));
          sourceLines.push(base + i);
        }
        i++;
      }
      result.push({kind:'table', rows, sourceLines}); continue;
    }
    const answers = [];
    let j = i + 1;
    while (j < rawLines.length) {
      const next = contentLine(rawLines[j]);
      if (!next) { j++; continue; }
      if (next.startsWith('→')) { answers.push({text:next, line:base + j}); j++; }
      else break;
    }
    if (answers.length && !line.startsWith('→')) {
      result.push({kind:'recall', prompt:line, answers:answers.map(x=>x.text), sourceLines:[base+i, ...answers.map(x=>x.line)]});
      i = j; continue;
    }
    const pair=line.match(/^(.+?)\s*→\s*(.+)$/);
    if(pair && /[a-z]{2}/i.test(pair[2]) && !/[가-힣]/.test(pair[2])) {
      result.push({kind:'recall',prompt:pair[1],answers:['→ '+pair[2]],sourceLines:[base+i]});i++;continue;
    }
    result.push({kind:'line', text:line, sourceLines:[base+i]}); i++;
  }
  return result;
}
function htmlFor(block) {
  if (block.kind === 'table') return `<div class="lesson-table" tabindex="0" role="region" aria-label="주제별 소재 표"><table><thead><tr>${block.rows[0].map(c=>`<th scope="col">${inline(c)}</th>`).join('')}</tr></thead><tbody>${block.rows.slice(1).map(row=>`<tr>${row.map(c=>`<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if (block.kind === 'recall') return `<details class="recall" open><summary>${inline(block.prompt)}</summary><div class="recall-answer">${block.answers.map(t=>`<p>${inline(t)}</p>`).join('')}</div></details>`;
  const text = block.text;
  const english = !/[가-힣]/.test(plain(text)) && /[a-z]{2}/i.test(text) && !/^\*\*[^*]+\*\*$/.test(text.trim());
  return `<p${english?' lang="en" class="english-line"':''}>${inline(text)}</p>`;
}

const lessons = [];
let scriptSequence = 1000;
for (const section of sections) {
  const chunks = [];
  if (section.title === '유형별 답변 구조') {
    let chunk;
    section.lines.forEach((line, i) => {
      if (/^\d+\. \*\*/.test(line.trim())) {
        chunk = {title:plain(line).replace(/^\d+\.\s*/, ''), lines:[], offset:i};
        chunks.push(chunk);
      }
      if (chunk) chunk.lines.push(line);
    });
  } else chunks.push({title:section.title, lines:section.lines, offset:0});
  for (const chunk of chunks) {
    if (!chunk.lines.some(meaningful)) continue;
    const blocks = blocksFor(chunk.lines, section.start + 1 + chunk.offset);
    const isScript = section.path[0] === '유형별 예시 문제와 답변 스크립트';
    const id = 'lesson-' + String(isScript ? ++scriptSequence : lessons.length+1).padStart(3, '0');
    const questions = [];
    for (const block of blocks) if (isScript && block.kind === 'line') {
      const text = plain(block.text).replace(/^\d+\.\s*/, '');
      if (/\*\*/.test(block.text) && /^[A-Za-z]/.test(text) && text.length > 65) {
        block.role = 'question'; questions.push(text);
      } else if (section.path[1] !== '사물 묘사 문제' && /^[A-Za-z]/.test(text) && text.length > 100) block.role = 'answer';
      else block.role = 'note';
    }
    const english = isScript ? blocks.filter(b=>b.role==='answer').map(b=>plain(b.text)).join('\n\n') : blocks.filter(b=>b.kind==='line').map(b=>plain(b.text).replace(/\s*\+\s*[가-힣].*$/, '').replace(/^\* /, '')).filter(t=>!/[가-힣]/.test(t) && /[a-z]{2}/i.test(t)).join('\n\n');
    lessons.push({id, title:displayTitle(chunk.title), group:category(section), path:section.path.map(displayTitle), sourceStart:section.start+chunk.offset, blocks, questions, html:blocks.map(htmlFor).join('\n'), english, text:chunk.lines.filter(meaningful).map(l=>plain(contentLine(l))).join('\n')});
  }
}
const quizzes = [];
for (const lesson of lessons.filter(l=>['patterns','expressions'].includes(l.group))) {
  for (const [index, block] of lesson.blocks.entries()) {
    if (block.kind !== 'recall') continue;
    const answer = block.answers.map(t=>plain(t).replace(/^→\s*/, '')).join(' / ');
    const question = plain(block.prompt).replace(/^[A-Z\d]+\.\s*/, '').replace(/^\*\s*/, '');
    if (!answer || /[가-힣]/.test(answer)) continue;
    quizzes.push({id:lesson.id+'-'+index, lessonId:lesson.id, type:lesson.group==='patterns'?'grammar':/숙어/.test(lesson.title)?'idiom':/연결어/.test(lesson.title)?'connective':/필러/.test(lesson.title)?'filler':'vocab', q:question, a:answer});
  }
}
for (const quiz of quizzes) {
  const candidates = quizzes.filter(q=>q.type===quiz.type && q.a!==quiz.a);
  const start = quizzes.indexOf(quiz) % candidates.length;
  quiz.o = [quiz.a, ...Array.from({length:Math.min(3,candidates.length)}, (_,i)=>candidates[(start+i)%candidates.length].a)];
  quiz.e = quiz.q+' → '+quiz.a;
}
const data = {sourceFile:'opic종합정리.md', sourceSha256:crypto.createHash('sha256').update(source).digest('hex'), sourceLineCount:lines.length, sections, groups, lessons, quizzes};
const output = '// Generated by node scripts/build-course.mjs from opic종합정리.md.\nwindow.OPIC_COURSE = '+JSON.stringify(data, null, 2)+';\n';
fs.writeFileSync(path.join(root, 'course-data.js'), output);
console.log(`Built ${lessons.length} lessons and ${quizzes.length} recall questions from ${lines.length} source lines.`);
