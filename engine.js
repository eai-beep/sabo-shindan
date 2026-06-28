console.log("engine loaded");

let current = null;
let isRunning = false;

// 安全に参照（未定義で死なないようにする）
const data = window.data || [];
const loadingMessages = window.loadingMessages || [
  "診断中...",
  "解析中...",
  "サボり指数計算中..."
];

function pickResult() {
  const r = Math.random();

  let rank = "N";
  if (r < 0.01) rank = "SSR";
  else if (r < 0.05) rank = "SR";
  else if (r < 0.2) rank = "R";

  const pool = data.filter(d => d.rank === rank);

  // ★空対策（ここ重要）
  if (pool.length === 0) {
    return data[Math.floor(Math.random() * data.length)];
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function run() {
  if (isRunning) return;
  isRunning = true;

  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");

  const level = document.getElementById("level");
  const nickname = document.getElementById("nickname");
  const text = document.getElementById("text");

  // 初期化
  level.textContent = "Lv --";
  nickname.textContent = "---";
  text.textContent = "ボタンを押してね";

  // ロード表示
  if (loading) loading.classList.remove("hidden");
  if (loadingText) loadingText.classList.remove("hidden");

  loadingText.textContent = "";

  const interval = setInterval(() => {
    loadingText.textContent =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }, 180);

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();

    // ロード終了
    if (loading) loading.classList.add("hidden");
    if (loadingText) loadingText.classList.add("hidden");

    // 表示
    current = result;

    level.textContent = "Lv " + result.level;
    nickname.textContent = result.name;
    text.textContent = result.text;

    isRunning = false;
  }, 1200 + Math.random() * 600);
}

function copyResult() {
  if (!current) return;

  navigator.clipboard.writeText(
    `【サボり診断】
Lv ${current.level}
${current.name}
${current.text}`
  );

  alert("コピーしました");
}

function shareResult() {
  if (!current) return;

  const url = `${location.origin}${location.pathname}?id=${current.id}`;
  navigator.clipboard.writeText(url);

  alert("URLコピーしました");
}
