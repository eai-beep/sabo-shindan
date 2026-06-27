// =========================
// ■ ミーム辞書（初期データ）
// =========================

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
  },
  {
    id: "004",
    level: 73,
    name: "先延ばしプロ",
    text: "締切までまだ時間ある、って思った瞬間から負けてる。",
    tier: "volatile",
    score: 0
  }
];

// =========================
// ■ 状態管理
// =========================

let lastId = null;

const log = {};

// =========================
// ■ ワード選択（重み付きランダム）
// =========================

function pickWord(){

  let pool = data.filter(w => w.id !== lastId);

  const weighted = [];

  pool.forEach(w => {
    const weight = w.tier === "core" ? 5 : 1;

    for(let i = 0; i < weight; i++){
      weighted.push(w);
    }
  });

  return weighted[Math.floor(Math.random() * weighted.length)];
}

// =========================
// ■ メイン実行
// =========================

function run(){

  const r = pickWord();
  lastId = r.id;

  document.getElementById("level").innerText = "Lv." + r.level;
  document.getElementById("name").innerText = r.name;
  document.getElementById("text").innerText = r.text;

  track(r);
}

// =========================
// ■ ログ記録
// =========================

function track(r){

  if(!log[r.id]){
    log[r.id] = {show:0, retry:0, share:0};
  }

  log[r.id].show++;

  updateScore(r.id);
}

// =========================
// ■ スコア計算
// =========================

function updateScore(id){

  const l = log[id];
  const w = data.find(d => d.id === id);

  w.score =
    (l.share * 5) +
    (l.retry * 2) +
    (l.show * 0.1);

  evolve();
}

// =========================
// ■ 進化ロジック
// =========================

function evolve(){

  data.forEach(w => {

    // 強いワードはコアへ
    if(w.score > 1.5){
      w.tier = "core";
    }

    // 弱いワードは可変枠へ
    if(w.score < 0.3){
      w.tier = "volatile";
    }
  });
}
