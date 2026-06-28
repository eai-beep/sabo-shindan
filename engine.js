let current = null;

function getRandomResult(){

  const isRare = Math.random() < 0.05;

  if(isRare){
    return rarePool[Math.floor(Math.random() * rarePool.length)];
  }

  return data[Math.floor(Math.random() * data.length)];
}

function run(){

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
}

function copyResult(){

  if(!current) return;

  navigator.clipboard.writeText(
`Lv.${current.level}
${current.name}
${current.text}`
  );

  alert("コピーしました");
}

function shareResult(){

  if(!current) return;

  const url = `${location.origin}${location.pathname}?id=${current.id}`;

  navigator.clipboard.writeText(url);
  alert("リンクコピーしました");
}
