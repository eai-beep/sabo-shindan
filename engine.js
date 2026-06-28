let current = null;

/* ■結果取得 */
function pickResult() {
  const r = Math.random();

  let rank = "N";

  if (r < 0.01) rank = "SSR";
  else if (r < 0.05) rank = "SR";
  else if (r < 0.2) rank = "R";

  const pool = window.data.filter(d => d.rank === rank);
  return pool[Math.floor(Math.random() * pool.length)];
}

/* ■表示 */
function render(result) {
  current = result;

  document.getElementById("level").innerText = "Lv " + result.level;
  document.getElementById("nickname").innerText = result.name;
  document.getElementById("text").innerText = result.text;
}

/* ■ランダム演出 */
function playFx(type) {
  const body = document.body;
  const container = document.querySelector(".container");

  body.classList.remove("flash");
  container.classList.remove("shake", "zoom", "gold");

  if (type === "flash") body.classList.add("flash");
  if (type === "shake") container.classList.add("shake");
  if (type === "zoom") container.classList.add("zoom");
  if (type === "gold") container.classList.add("gold");
}

/* ■ランダム演出選択 */
function playRandomFx(result) {
  const fxMap = {
    N: ["zoom"],
    R: ["flash", "zoom"],
    SR: ["shake", "flash"],
    SSR: ["gold", "flash", "shake", "zoom"]
  };

  const list = fxMap[result.rank] || ["zoom"];
  const fx = list[Math.floor(Math.random() * list.length)];

  playFx(fx);
}

/* ■メイン */
function run() {
  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");

  loading.classList.remove("hidden");
  loadingText.classList.remove("hidden");

  const interval = setInterval(() => {
    loadingText.innerText =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }, 250);

  const wait = 1200 + Math.random() * 600;

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();

    loading.classList.add("hidden");
    loadingText.classList.add("hidden");

    render(result);
    playRandomFx(result);

    history.replaceState(null, "", `?id=${result.id}`);
  }, wait);
}

/* ■コピー */
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

/* ■シェア */
function shareResult() {
  if (!current) return;

  navigator.clipboard.writeText(
    `${location.origin}${location.pathname}?id=${current.id}`
  );

  alert("URLコピーしました");
}
