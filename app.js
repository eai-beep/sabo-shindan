// ■■■ ミーム辞書（最小版） ■■■

const data = [
  {
    id: "001",
    level: 87,
    name: "偏差値溶かし職人",
    text: "スマホ6時間、勉強0時間。完全にスクロール専用脳。",
    tier: "core",
    score: 0
  },
  {
    id: "002",
    level: 42,
    name: "夜更かし亡霊",
    text: "午前2時の“明日やる”は、もう習慣になってるね。",
    tier: "volatile",
    score: 0
  },
  {
    id: "003",
    level: 66,
    name: "言い訳生成機",
    text: "やる気が出たらやる、って言ってる時点で一生やらないやつ。",
    tier: "volatile",
    score: 0
  }
];

let lastId = null;

// ■■■ ランダム（重み付き） ■■■

function pickWord(){

  let pool = data.filter(w => w.id !== lastId);

  const weighted = [];

  pool.forEach(w => {
    const weight = w.tier === "core" ? 5 : 1;

    for(let i=0;i<weight;i++){
      weighted.push(w);
    }
  });

  return weighted[Math.floor(Math.random() * weighted.length)];
}

// ■■■ 実行 ■■■

function run(){

  const r = pickWord();
  lastId = r.id;

  document.getElementById("level").innerText = "Lv." + r.level;
  document.getElementById("name").innerText = r.name;
  document.getElementById("text").innerText = r.text;

  track(r);
}
