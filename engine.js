let current = null;
let isRunning = false;

function resetUI() {
  document.getElementById("level").innerText = "Lv --";
  document.getElementById("nickname").innerText = "---";
  document.getElementById("text").innerText = "ボタンを押してね";
}

function run() {
  if (isRunning) return;
  isRunning = true;

  const loading = document.getElementById("loading");
  const loadingText = document.getElementById("loadingText");

  // ■① まず完全リセット（ここが本体）
  resetUI();
  current = null;

  // ■② ロード開始
  loading.classList.remove("hidden");
  loadingText.classList.remove("hidden");
  loadingText.innerText = "";

  const interval = setInterval(() => {
    loadingText.innerText =
      loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  }, 200);

  const wait = 1200 + Math.random() * 600;

  setTimeout(() => {
    clearInterval(interval);

    const result = pickResult();

    // ■③ ロード終了
    loading.classList.add("hidden");
    loadingText.classList.add("hidden");

    // ■④ 結果表示
    showResult(result);

    playRandomFx(result);

    history.replaceState(null, "", `?id=${result.id}`);

    isRunning = false;
  }, wait);
}

function showResult(result) {
  current = result;

  document.getElementById("level").innerText = "Lv " + result.level;
  document.getElementById("nickname").innerText = result.name;
  document.getElementById("text").innerText = result.text;
}
