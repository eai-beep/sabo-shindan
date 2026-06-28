(() => {

  let current = null;

  function getPool(){
    // ★ここが重要：存在チェックを毎回やる
    const data = window.data;
    const rare = window.rarePool;

    if(!Array.isArray(data)){
      console.error("data.js not loaded: window.data is", data);
      return [];
    }

    if(!Array.isArray(rare)){
      console.error("data.js not loaded: window.rarePool is", rare);
    }

    return { data, rare };
  }

  function getRandomResult(){

    const { data, rare } = getPool();

    if(Math.random() < 0.05 && rare?.length){
      return rare[Math.floor(Math.random() * rare.length)];
    }

    return data[Math.floor(Math.random() * data.length)];
  }

  function run(){

    const loading = document.getElementById("loading");
    const main = document.getElementById("main");

    if(!window.data){
      alert("data.jsが読み込まれてない（window.dataなし）");
      return;
    }

    loading.style.display = "block";
    main.style.display = "none";

    setTimeout(() => {

      const r = getRandomResult();
      current = r;

      document.getElementById("level").innerText = "Lv " + r.level;
      document.getElementById("nickname").innerText = r.name;
      document.getElementById("text").innerText = r.text;

      loading.style.display = "none";
      main.style.display = "flex";

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

  // ★確実にグローバルへ出す
  window.run = run;
  window.copyResult = copyResult;
  window.shareResult = shareResult;

})();
