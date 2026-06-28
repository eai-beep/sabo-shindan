let current = null;
let isRunning = false;

function pickResult() {
  const r = Math.random();

  let rank = "N";
  if (r < 0.01) rank = "SSR";
  else if (r < 0.05) rank = "SR";
  else if (r < 0.2) rank = "R";

  const pool = window.data.filter(d => d.rank === rank);
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

  loading.classList.remove("hidden");
  loadingText.classList.remove("hidden");

  const interval = setInterval(() => {
    loadingText.textContent =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }, 200);

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();

    loading.classList.add("hidden");
    loadingText.classList.add("hidden");

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

  navigator.clipboard.writeText(
    `${location.href.split('?')[0]}?id=${current.id}`
  );

  alert("URLコピーしました");
}
