let current = null;

function pickResult() {
  if (!window.data || !window.data.length) {
    console.error("data missing");
    return null;
  }

  const r = Math.random();

  let rank = "N";

  if (r < 0.01) rank = "SSR";
  else if (r < 0.05) rank = "SR";
  else if (r < 0.20) rank = "R";

  let pool = window.data.filter(d => d.rank === rank);

  if (!pool.length) {
    pool = window.data.filter(d => d.rank === "N");
  }

  if (!pool.length) return window.data[0];

  return pool[Math.floor(Math.random() * pool.length)];
}

function run() {
  console.log("run clicked");

  current = pickResult();

  if (!current) {
    alert("データエラー");
    return;
  }

  document.getElementById("level").innerText = "Lv " + current.level;
  document.getElementById("nickname").innerText = current.name;
  document.getElementById("text").innerText = current.text;
}

function copyResult() {
  if (!current) return;

  navigator.clipboard.writeText(
    `【サボり診断】\nLv ${current.level}\n${current.name}\n${current.text}`
  );

  alert("コピーしました");
}

function shareResult() {
  if (!current) return;

  const url = `${location.origin}${location.pathname}?id=${current.id}`;
  navigator.clipboard.writeText(url);

  alert("シェアURLコピーしました");
}
