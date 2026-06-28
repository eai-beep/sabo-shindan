let current = null;
let isRunning = false;

function run() {
  if (isRunning) return; // ★連打バグ防止
  isRunning = true;

  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");

  const level = document.getElementById("level");
  const nickname = document.getElementById("nickname");
  const text = document.getElementById("text");

  // ★完全リセット（ここが重要）
  current = null;
  level.innerText = "Lv --";
  nickname.innerText = "---";
  text.innerText = "";

  // ★ロード表示
  loading.classList.remove("hidden");
  loadingText.classList.remove("hidden");

  loadingText.innerText = "";

  const interval = setInterval(() => {
    loadingText.innerText =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }, 200);

  const wait = 1200 + Math.random() * 700;

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();

    // ★ロード終了
    loading.classList.add("hidden");
    loadingText.classList.add("hidden");

    // ★表示
    current = result;
    level.innerText = "Lv " + result.level;
    nickname.innerText = result.name;
    text.innerText = result.text;

    playRandomFx(result);

    isRunning = false;

    history.replaceState(null, "", `?id=${result.id}`);
  }, wait);
}
