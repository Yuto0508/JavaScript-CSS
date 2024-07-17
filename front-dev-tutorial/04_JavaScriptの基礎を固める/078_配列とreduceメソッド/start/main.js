const arry = [1, 2, 3, 4, 5];

//acuuは1ループ目の時に１という意味、currは2以降が渡る
arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  //accuとcurrmp数値が足されてacuuに返り値として渡る(掛け算もある)
  // return accu + curr;
});
//第２引数を設置することでcurrにすべての値が渡る
// }, 10);
//str=string
const str = "animation";
//1つずつ分割されて表示される。値が何もないものは空文字。
const strArry = str.split("");

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
  console.log(accu);
  //cuurでしか<>が制御されているためaだけは<>で囲まれない形になる
  return accu + "<" + curr + ">";
  // return `${accu}<${curr}>`
  //'<' + accu + '>'にすると＜＞が出てしまうため初期値の空文字を設定
}, "");
//呼び出し元に結果が格納される
console.log(result);
