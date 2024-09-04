// 文字列 "animation" を 1 文字ずつに分割して配列に変換
const str = "animation";
const strArry = str.split("");

// tag 関数は、アキュムレータ (accu) と現在の文字 (curr) を受け取り、文字をタグで囲んだ文字列をアキュムレータに追加して返す
function tag(accu, curr) {
  console.log(accu); 
  return `${accu}<${curr}>`; 
}

// reduce 関数は、配列 (arry)、コールバック関数 (callback)、初期値 (defaultValue) を受け取る
function reduce(arry, callback, defaultValue) {
  // アキュムレータを初期値に設定
  let accu = defaultValue; 

  // 配列の各要素に対してコールバック関数を適用
  for (let i = 0; i < arry.length; i++) {
    // 現在の要素を取得
    let curr = arry[i]; 
    // コールバック関数を適用してアキュムレータを更新
    accu = callback(accu, curr);
  }

  // 最終的なアキュムレータの値を返す
  return accu;
}

// strArry 配列を tag 関数と初期値 "" を使って reduce 関数に渡す
const result = reduce(strArry, tag, "");
// 最終的な結果をコンソールに出力 
console.log(result);
