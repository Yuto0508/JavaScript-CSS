const arry = [1, 2, 3, 4, 5, 6];

//i,インクリメント。for文の中で使うもので、1ずつカウントアップさせていただきたい変数を初期化
//iが0から始まっているので、１にすると「1,2,3,4」という風に取得
//i < 5ループする条件を取得、iの値の後、より小さい場合はループを継続する。
//例えばiが1から始まる場合は1234になる。
//i = i + 1はブロックが１回終了したときに実行される式,i=0+1,i=i+1...と繰り返し文になる
// for(let i = 0; i < 5; i = i + 1){

//     //consoleの中にarry[i]と呼び出すことで12345と全ての要素を取得することができる
//    console.log(arry[i]);
// }

//arry.lengthというプロパティにすることで配列の要素数を取得しiとの比較を行わない。
for (let i = 0; i < arry.length; i++) {
  //consoleの中にarry[i]と呼び出すことで12345と全ての要素を取得することができる
  //i++にしても一ずつ追加される
  console.log(i);
}
