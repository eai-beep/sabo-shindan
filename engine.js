function run() {
  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");

  const level = document.getElementById("level");
  const nickname = document.getElementById("nickname");
  const text = document.getElementById("text");

  // ★① 前の結果を消す（重要）
  level.innerText = "Lv --";
  nickname.innerText = "---";
  text.innerText = "";

  // ★② ロード表示
  loading.classList.remove("hidden");
  loadingText.classList.remove("hidden");

  // ★③ 表示リセット（重要）
  loadingText.innerText = "";

  const interval = setInterval(() => {
    loadingText.innerText =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }, 250);

  const wait = 1200 + Math.random() * 600;

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();

    // ★④ ロード終了
    loading.classList.add("hidden");
    loadingText.classList.add("hidden");

    // ★⑤ 表示
    render(result);
    playRandomFx(result);

    history.replaceState(null, "", `?id=${result.id}`);
  }, wait);
}
