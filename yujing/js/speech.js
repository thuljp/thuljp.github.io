// 发音（浏览器内置 TTS）、语音识别、录音、声音日记存储
import { S, addInput, LANGS } from './store.js';

const synth = window.speechSynthesis;
let voices = [];
function loadVoices() { voices = synth ? synth.getVoices() : []; }
if (synth) { loadVoices(); synth.onvoiceschanged = loadVoices; }

export function voicesFor(lang) {
  const loc = LANGS[lang].meta.locale.slice(0, 2);
  return voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(loc));
}
function pickVoice(lang, alt = false) {
  const list = voicesFor(lang);
  if (!list.length) return null;
  const chosen = S().settings.voice[lang];
  // 给对话中的"另一个人"换个声音，听起来更像真实对话
  const ranked = [...list].sort((a, b) => score(b) - score(a));
  let v = list.find(x => x.voiceURI === chosen) || ranked[0];
  if (alt) v = ranked.find(x => x !== v) || v;
  return v;
}
function score(v) {
  const n = (v.name || '').toLowerCase();
  return (/natural|neural|premium|enhanced|google/.test(n) ? 2 : 0) + (v.localService ? 0 : 1);
}

export const ttsAvailable = () => !!synth;

let current = null;
export function stop() { if (synth) synth.cancel(); current = null; }

// 朗读一句，返回 Promise；结束时把用时计入"输入时长"
export function speak(text, lang, { rate, alt = false, count = true } = {}) {
  return new Promise(resolve => {
    if (!synth || !text) return resolve();
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANGS[lang].meta.locale;
    const v = pickVoice(lang, alt);
    if (v) u.voice = v;
    u.rate = rate ?? S().settings.ttsRate;
    const t0 = performance.now();
    const done = () => {
      if (current !== u) return resolve();
      current = null;
      if (count) addInput((performance.now() - t0) / 1000);
      resolve();
    };
    u.onend = done; u.onerror = done;
    current = u;
    synth.speak(u);
    // Safari 偶尔不触发 onend：按长度兜底
    setTimeout(() => { if (current === u && !synth.speaking) done(); }, 400 + text.length * 220);
  });
}

// ---------- 语音识别 ----------
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
export const sttAvailable = () => !!SR;

export function listen(lang, { onInterim } = {}) {
  return new Promise((resolve, reject) => {
    if (!SR) return reject(new Error('这个浏览器不支持语音识别，建议用电脑版 Chrome 或 Edge。'));
    const r = new SR();
    r.lang = LANGS[lang].meta.locale;
    r.interimResults = true;
    r.maxAlternatives = 3;
    let final = '';
    r.onresult = e => {
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) final += res[0].transcript;
        else interim += res[0].transcript;
      }
      onInterim && onInterim(final + interim);
    };
    r.onerror = e => reject(new Error(e.error === 'not-allowed' ? '没有麦克风权限。请在浏览器地址栏允许麦克风。' : e.error === 'no-speech' ? '没有听到声音，再试一次。' : '识别出错：' + e.error));
    r.onend = () => resolve(final.trim());
    r.start();
    listen.stop = () => { try { r.stop(); } catch {} };
  });
}

// ---------- 录音 ----------
export async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('这个浏览器不支持录音。');
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const rec = new MediaRecorder(stream);
  const chunks = [];
  const t0 = Date.now();
  rec.ondataavailable = e => e.data.size && chunks.push(e.data);
  rec.start();
  return {
    stop: () => new Promise(res => {
      rec.onstop = () => { stream.getTracks().forEach(t => t.stop()); res({ blob: new Blob(chunks, { type: rec.mimeType || 'audio/webm' }), sec: (Date.now() - t0) / 1000 }); };
      rec.stop();
    }),
  };
}

// ---------- 声音日记（IndexedDB） ----------
function db() {
  return new Promise((res, rej) => {
    const r = indexedDB.open('yujing', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('diary', { keyPath: 'id' });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
export async function saveDiary(entry) {
  const d = await db();
  return new Promise((res, rej) => { const tx = d.transaction('diary', 'readwrite'); tx.objectStore('diary').put(entry); tx.oncomplete = res; tx.onerror = () => rej(tx.error); });
}
export async function listDiary(lang) {
  const d = await db();
  return new Promise((res, rej) => {
    const q = d.transaction('diary').objectStore('diary').getAll();
    q.onsuccess = () => res(q.result.filter(e => e.lang === lang).sort((a, b) => a.t - b.t));
    q.onerror = () => rej(q.error);
  });
}
export async function deleteDiary(id) {
  const d = await db();
  return new Promise(res => { const tx = d.transaction('diary', 'readwrite'); tx.objectStore('diary').delete(id); tx.oncomplete = res; });
}
