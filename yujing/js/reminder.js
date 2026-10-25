// 每日提醒：① 日历订阅文件（最可靠，手机/电脑日历按时弹出）② 网页打开时的系统通知
import { S, save, studiedOn, counts, LANGS } from './store.js';
import { dayKey, download } from './util.js';

export function buildICS(time, url) {
  const [hh, mm] = time.split(':').map(Number);
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hh, mm);
  const p = n => String(n).padStart(2, '0');
  const local = d => `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(d.getHours())}${p(d.getMinutes())}00`;
  const end = new Date(start.getTime() + 25 * 60000);
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const lines = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Yujing//Daily Study//ZH', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:yujing-daily-${hh}${mm}@yujing`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${local(start)}`,
    `DTEND:${local(end)}`,
    'RRULE:FREQ=DAILY',
    'SUMMARY:语境 · 今天的语言练习',
    `DESCRIPTION:复习到期卡片 + 一个场景，大约 25 分钟。\\n打开：${url}`,
    `URL:${url}`,
    'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:该练语言了', 'TRIGGER:PT0M', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ];
  return lines.join('\r\n');
}

export function downloadICS() {
  const t = S().settings.reminderTime;
  const url = location.href.split('#')[0];
  download('语境-每日提醒.ics', buildICS(t, url), 'text/calendar');
}

export async function enableNotifications() {
  if (!('Notification' in window)) throw new Error('这个浏览器不支持通知。请改用日历提醒。');
  const p = await Notification.requestPermission();
  if (p !== 'granted') throw new Error('通知权限被拒绝。可以在浏览器设置里重新允许，或改用日历提醒。');
  S().settings.remind = true;
  save();
}

async function notify(title, body) {
  try {
    const reg = await navigator.serviceWorker?.getRegistration();
    if (reg) return reg.showNotification(title, { body, icon: 'icon.svg', tag: 'yujing-daily' });
  } catch {}
  new Notification(title, { body, icon: 'icon.svg' });
}

// 网页（或已安装的应用）开着时，每分钟检查一次
export function startReminderLoop() {
  const tick = () => {
    const st = S();
    if (!st.settings.remind || !('Notification' in window) || Notification.permission !== 'granted') return;
    const k = dayKey();
    if (st.lastNotified === k || studiedOn(k)) return;
    const [hh, mm] = st.settings.reminderTime.split(':').map(Number);
    const now = new Date();
    if (now.getHours() * 60 + now.getMinutes() < hh * 60 + mm) return;
    const active = Object.keys(LANGS).filter(l => st.active[l]);
    const due = active.reduce((n, l) => n + counts(l).due, 0);
    st.lastNotified = k; save();
    notify('该练语言了', due ? `有 ${due} 张卡片等你复习，再加一个场景，大约 25 分钟。` : '今天还没学习。花 20 分钟走一个场景吧。');
  };
  tick();
  setInterval(tick, 60000);
}
