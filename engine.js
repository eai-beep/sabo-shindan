let current = null;

const loadingMessages = [
  "サボり指数を解析中...",
  "現実逃避レベル測定中...",
  "スマホ依存度チェック中...",
  "やる気残量を確認中...",
  "SSR発生確率計算中...",
  "未来の行動パターン予測中..."
];

function pickResult() {
  const r = Math.random();

  let rank = "N";

  if (r < 0.01) rank = "SSR";
  else if (r < 0.05) rank = "SR";
  else if (r < 0.2) rank = "R";

  const pool = window.data.filter(d => d.rank === rank);

  return pool[Math.floor(Math.random() * pool.length)];
}

function render(result) {
  current = result;

  document.getElementById("level").innerText = "Lv " + result.level;
  document.getElementById("nickname").innerText = result.name;
  document.getElementById("text").innerText = result.text;
}

function run() {
  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");

  loading.classList.remove("hidden");
  loadingText.classList.remove("hidden");

  let i = 0;

  const interval = setInterval(() => {
    loadingText.innerText =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    i++;
  }, 400);

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();
    render(result);

    loading.classList.add("hidden");
    loadingText.classList.add("hidden");

    history.replaceState(null, "", `${location.pathname}?id=${result.id}`);
  }, 1500);
}

function copyResult() {
  if (!current) return;

  const text = `【サボり診断】
Lv ${current.level}
${current.name}
${current.text}`;

  navigator.clipboard.writeText(text);
  alert("コピーしました");
}

function shareResult() {
  if (!current) return;

  const url = `${location.origin}${location.pathname}?id=${current.id}`;

  navigator.clipboard.writeText(url);
  alert("シェアURLコピーしました");
}
