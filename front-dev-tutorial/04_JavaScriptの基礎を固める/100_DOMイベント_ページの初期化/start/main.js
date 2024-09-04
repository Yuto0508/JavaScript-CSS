

// const dcl = document.querySelector(".dcl");
// const load = document.querySelector(".load");

//ダウンロードは待たないがHTML要素がDOMに変換されたタイミングで発火
//基本的にはDOMで読み込ませたほうが早いのでベター
document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector('h1');
  h1.style.color = 'red';
  });
// //htmlからDOMを生成した後に画像動画やスタイルシート,jsのすべてのコンテンツをダウンロードした後に発火
window.addEventListener("load", function () {
  // load.classList.add("done");
  // const h1 = document.querySelector('h1');
  // h1.style.color = 'red';
});

// document.addEventListener("DOMContentLoaded", function () {
//   const h1 = document.querySelector('h1');
//   h1.style.color = "red";
// });