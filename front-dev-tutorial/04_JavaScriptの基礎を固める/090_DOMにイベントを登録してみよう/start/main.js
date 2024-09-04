const btn = document.querySelector("#btn");
const h1 = document.querySelector("h1");

function changeColor() {
  //関数内で使用する場合はthisオブジェクトを使う。
  //addEventListeneに登録された関数内においてはHTMLのDOMがthisに格納された状態で渡ってくる。
  h1.style.color = "red";
}
function changeBgColor() {
  h1.style.backgroundColor = "green";
}
//第一引数のイベント名、第二引数の関数名
btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeBgColor);

//イベントハンドラー。後から登録したところのみが反映(1つしか反映できない)
// btn.onclick = changeColor;
// btn.onclick = changeBgColor;

//背景の色が解除される
// btn.removeEventListener("click", changeBgColor);