//forEachメソッドとは一つの配列に対して何らかの処理を行いたい場合に使用するもの
const arry = [1, 2, 3, 4, 5];

//一つ目が値、二つ目が添字(配列の要素番号)、三つ目が配列と表示
arry.forEach(function (val, i, ary) {
  console.log(val, i, ary);
});
//上のコードを省略した場合
arry.forEach((val) => console.log(val));
//for文の場合
for (let i = 0; i < arry.length; i++) {
  const val = arry[i];
  console.log(val);
}
