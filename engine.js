let current = null;

window.run = function(){

  const r = data[Math.floor(Math.random() * data.length)];
  current = r;

  document.getElementById("level").innerText = "Lv " + r.level;
  document.getElementById("nickname").innerText = r.name;
  document.getElementById("text").innerText = r.text;

  // URL更新（シェア用）
  const url = `${location.origin}${location.pathname}?id=${r.id}`;
  history.replaceState(null, "", url);
};

window.copyResult = function(){

  if(!current) return;

  const url = `${location.origin}${location.pathname}?id=${current.id}`;

  const text =
`Lv.${current.level}
${current.name}
${current.text}

${url}`;

  navigator.clipboard.writeText(text);
  alert("コピーしました");
};

window.shareResult = function(){

  if(!current) return;

  const url = `${location.origin}${location.pathname}?id=${current.id}`;

  const text =
`【サボり診断】
Lv.${current.level}
${current.name}
${current.text}

👇結果
${url}`;

  if(navigator.share){
    navigator.share({ text });
  } else {
    navigator.clipboard.writeText(text);
  }
};

// URL復元
window.onload = function(){

  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id"));

  if(!id) return;

  const r = data.find(d => d.id === id);
  if(!r) return;

  current = r;

  document.getElementById("level").innerText = "Lv " + r.level;
  document.getElementById("nickname").innerText = r.name;
  document.getElementById("text").innerText = r.text;
};
