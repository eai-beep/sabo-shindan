<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>サボり診断</title>

<style>
.hidden { display:none; }

body {
  margin: 0;
  font-family: sans-serif;
  background: #111;
  color: white;
}

.container {
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 20px;
  margin-bottom: 20px;
}

.level {
  font-size: 28px;
  margin-top: 10px;
}

.nickname {
  font-size: 22px;
  margin-top: 10px;
}

.text {
  margin-top: 10px;
  opacity: 0.8;
}

button {
  width: 100%;
  padding: 14px;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
}

.primary {
  background: gold;
  font-weight: bold;
}

.secondary {
  background: #333;
  color: white;
}

/* loading */
#loading {
  position: fixed;
  inset: 0;
  display:flex;
  align-items:center;
  justify-content:center;
  background: rgba(0,0,0,0.8);
  font-size: 18px;
}

/* SSR */
.ssr-overlay {
  position: fixed;
  inset: 0;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 48px;
  background: rgba(0,0,0,0.85);
  color: gold;
  opacity: 0;
  transition: 0.2s;
}

.ssr-overlay.show {
  opacity: 1;
}

/* shake */
.shake {
  animation: shake 0.4s ease;
}

@keyframes shake {
  0% { transform: translate(0,0); }
  25% { transform: translate(-5px,3px); }
  50% { transform: translate(5px,-3px); }
  100% { transform: translate(0,0); }
}

/* flash */
.flash {
  animation: flash 0.6s ease;
}

@keyframes flash {
  0% { background:#000; }
  40% { background:#fff; }
  100% { background:#111; }
}
</style>

</head>

<body>

<div id="loading" class="hidden">
  <div id="loadingText"></div>
</div>

<div class="ssr-overlay hidden" id="ssrOverlay">？？？</div>

<div class="container">

  <div class="title">サボり診断メーカー</div>

  <div class="level" id="level">Lv --</div>
  <div class="nickname" id="nickname">---</div>
  <div class="text" id="text">ボタンを押してね</div>

  <div class="buttons">
    <button class="primary" onclick="run()">診断する</button>
    <button class="secondary" onclick="reset()">リセット</button>
  </div>

</div>

<script>
const data = [
  { id: 1, level: 1, rank: "N", name: "起動前人間", text: "まだ何もしてないのに疲れてる" },
  { id: 2, level: 5, rank: "N", name: "軽休憩民", text: "休憩がメインになってる" },
  { id: 3, level: 10, rank: "R", name: "スマホ吸引体", text: "気づいたらスマホを開いている" },
  { id: 4, level: 20, rank: "R", name: "動画中毒者", text: "1本のつもりが止まらない" },
  { id: 5, level: 50, rank: "SR", name: "現実逃避マスター", text: "気づいたら別のことしてる" },
  { id: 6, level: 99, rank: "SSR", name: "サボり神", text: "努力という概念が未実装" }
];

const loadingMessages = [
  "サボり指数解析中...",
  "やる気残量チェック...",
  "未来予測生成中...",
  "現実逃避スキャン中..."
];

let state = "idle";
let loadingInterval;

function run() {
  if (state !== "idle") return;

  state = "loading";
  reset();

  startLoading(() => {
    const result = data[Math.floor(Math.random() * data.length)];

    playFx(result, () => {
      showResult(result);
      state = "idle";
    });
  });
}

function startLoading(done) {
  const loading = document.getElementById("loading");
  const text = document.getElementById("loadingText");

  loading.classList.remove("hidden");
  text.classList.remove("hidden");

  let i = 0;

  loadingInterval = setInterval(() => {
    text.textContent = loadingMessages[i % loadingMessages.length];
    i++;
  }, 120);

  setTimeout(() => {
    clearInterval(loadingInterval);
    loading.classList.add("hidden");
    text.classList.add("hidden");
    done();
  }, 1300);
}

function showResult(result) {
  document.getElementById("level").textContent = "Lv " + result.level;
  document.getElementById("nickname").textContent = result.name;
  document.getElementById("text").textContent = result.text;
}

function reset() {
  document.getElementById("level").textContent = "Lv --";
  document.getElementById("nickname").textContent = "---";
  document.getElementById("text").textContent = "ボタンを押してね";
}

function playFx(result, callback) {
  playShake();
  playFlash();

  if (result.rank === "SSR") {
    playSSR(callback);
  } else {
    callback();
  }
}

function playShake() {
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 400);
}

function playFlash() {
  document.body.classList.add("flash");
  setTimeout(() => document.body.classList.remove("flash"), 600);
}

function playSSR(callback) {
  const overlay = document.getElementById("ssrOverlay");

  overlay.classList.remove("hidden");
  overlay.classList.add("show");
  overlay.textContent = "？？？";

  setTimeout(() => {
    document.body.classList.add("shake");
  }, 300);

  setTimeout(() => {
    document.body.classList.add("flash");
  }, 600);

  setTimeout(() => {
    overlay.textContent = "✨ SSR確定 ✨";
  }, 800);

  setTimeout(() => {
    overlay.classList.remove("show");
    overlay.classList.add("hidden");

    document.body.classList.remove("shake");
    document.body.classList.remove("flash");

    callback();
  }, 1400);
}
</script>

</body>
</html>
