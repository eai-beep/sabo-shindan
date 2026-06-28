function run() {
  if (isRunning) return;
  isRunning = true;

  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");

  const level = document.getElementById("level");
  const nickname = document.getElementById("nickname");
  const text = document.getElementById("text");

  // ★ここが重要：毎回初期状態に戻す
  level.textContent = "Lv --";
  nickname.textContent = "---";
  text.textContent = "ボタンを押してね";

  // ★ロード開始
  loading.classList.remove("hidden");
  loadingText.classList.remove("hidden");
  loadingText.textContent = "";

  const interval = setInterval(() => {
    loadingText.textContent =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }, 180);

  const wait = 1200 + Math.random() * 600;

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();

    // ★ロード終了
    loading.classList.add("hidden");
    loadingText.classList.add("hidden");

    // ★結果表示
    current = result;
    level.textContent = "Lv " + result.level;
    nickname.textContent = result.name;
    text.textContent = result.text;

    playRandomFx(result);

    isRunning = false;
  }, wait);
}
