let current = null;

// ★ここ超重要：必ず先に確認
function assertData(){
  if(!window.data || !Array.isArray(window.data)){
    console.error("data missing", window.data);
    return false;
  }
  return true;
}

function getRandom(){

  const d = window.data;
  const r = window.rarePool;

  const isRare = Math.random() < 0.05;

  if(isRare && Array.isArray(r)){
    return r[Math.floor(Math.random() * r.length)];
  }

  return d[Math.floor(Math.random() * d.length)];
}

// ★グローバルに直刺し（これ重要）
window.run = function(){

  if(!assertData()){
    alert("data.js読み込めてない or 壊れてる");
    return;
  }

  const loading = document.getElementById("loading");
  const main = document.getElementById("main");

  loading.style.display = "block";
  main.style.display = "none";

  setTimeout(() => {

    const res = getRandom();
    current = res;

    document.getElementById("level").innerText = "Lv " + res.level;
    document.getElementById("nickname").innerText = res.name;
    document.getElementById("text").innerText = res.text;

    loading.style.display = "none";
    main.style.display = "flex";

  }, 600);
};

window.copyResult = function(){

  if(!current) return;

  navigator.clipboard.writeText(
`Lv.${current.level}
${current.name}
${current.text}`
  );

  alert("コピーしました");
};

window.shareResult = function(){

  if(!current) return;

  const url = location.href.split("?")[0] + "?id=" + current.id;

  navigator.clipboard.writeText(url);

  alert("シェアURLコピー");
};
