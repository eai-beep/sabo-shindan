let current = null;

function run(){

  const r = data[Math.floor(Math.random() * data.length)];
  current = r;

  document.getElementById("level").innerText = "Lv " + r.level;
  document.getElementById("nickname").innerText = r.name;
  document.getElementById("text").innerText = r.text;
}

function copyResult(){

  if(!current) return;

  const text =
`Lv.${current.level}
${current.name}
${current.text}`;

  navigator.clipboard.writeText(text);
  alert("コピーしました");
}

function shareResult(){

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
    alert("コピーしました");
  }
}
