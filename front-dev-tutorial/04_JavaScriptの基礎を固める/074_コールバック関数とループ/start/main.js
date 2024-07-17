//コールバック関数は他の関数によって引数として渡され、「後で呼び出される関数」のこと。
const arry = [1, 2, 3, 4, 5];

//1,2,3,4,5と数値が表示
// for(let i = 0; i < arry.length; i++) {
//     console.log(arry[i]);
// }

//配列の値を引数として渡す処理
function forEach(ary, callback) {
  for (let i = 0; i < arry.length; i++) {
    callback(ary[i]);
  }
}

function log(val) {
  console.log(val);
}

//数値が2倍になる処理
function double(val) {
  val = val * 2;
  log(val);
}

//ary[i]の値がvalの値になり関数内で処理される
forEach(arry, function (val) {
  val = val * 2;
  log(val);
});
