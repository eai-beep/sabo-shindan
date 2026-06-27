let current = null;

window.run = function(){

  if(!window.data){
    alert("data.jsが読み込まれてない");
    return;
  }

  const r = data[Math.floor(Math.random() * data.length)];
  current = r;

  document.getElementById("level").innerText = "Lv " + r.level;
  document.getElementById("nickname").innerText = r.name;
  document.getElementById("text").innerText = r.text;
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

  const text =
`【サボり診断】
Lv.${current.level}
${current.name}
${current.text}`;

  if(navigator.share){
    navigator.share({ text });
  } else {
    navigator.clipboard.writeText(text);
  }
};
