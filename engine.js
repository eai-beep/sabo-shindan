let current = null;

function pickResult() {
  const r = Math.random();

  let rank = "N";

  if (r < 0.01) rank = "SSR";
  else if (r < 0.05) rank = "SR";
  else if (r < 0.20) rank = "R";

  const pool = window.data.filter(d => d.rank === rank);

  return pool[Math.floor(Math.random() * pool.length)];
}

function run() {
  current = pickResult();

  document.getElementById("level").innerText = "Lv " + current.level;
  document.getElementById("nickname").innerText = current.name;
  document.getElementById("text").innerText = current.text;
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
