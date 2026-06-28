let current = null;

function getRandomResult(){

  const isRare = Math.random() < 0.05;

  if(isRare){
    const pool = window.rarePool || [];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const pool = window.data || [];
  return pool[Math.floor(Math.random() * pool.length)];
}

window.run = function(){

  if(!window.data){
    alert("data.jsが読み込まれていない");
    return;
  }

  document.getElementById("loading").style.display = "block";
  document.getElementById("main").style.display = "none";

  setTimeout(() => {

    const r = getRandomResult();
    current = r;

    document.getElementById("level").innerText = "Lv " + r.level;
    document.getElementById("nickname").innerText = r.name;
    document.getElementById("text").innerText = r.text;

    document.getElementById("loading").style.display = "none";
    document.getElementById("main").style.display = "flex";

    if(r.level >= 777){
      alert("✨ RARE RESULT ✨");
    }

  }, 800);
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

  const url = `${location.origin}${location.pathname}?id=${current.id}`;

  navigator.clipboard.writeText(url);
  alert("リンクコピーしました");
};
