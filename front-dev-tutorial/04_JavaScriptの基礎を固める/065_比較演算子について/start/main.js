// const num = Number(false);
const num = 0;
//ブーリアンのコンストラクター。
//数字の値をBooleanに変換したboolという変数に持っている
//10はtureが返ってくることがわかり、10という数字がtureだということが返ってくる
//値が設定されていないundefinedを設定するとfalse
//値が設定されているとtrue。0とかの特別な数字はfalseになる。
//変数のみを値が設定されているかどうかという書き方なので覚えておくとよい。
const bool = Boolean(num);
console.log(bool);

console.log(num);

//イコールでないことを確認したいときは「！」をイコールの先頭につける
//なので文字列の０が数字の０に変換された後にイコールではない時true
// この場合はthis is false
//&&(二つのアンバサンド)を使った論理演算子。
//(数字の０と文字列の０がture かつ　数字の０と文字列の０の型が一致しているかどうか)
//型は違うのでfalseになる。
// if(0 == "0" && 0 === "0") {

//or条件。この場合だと１つ目の条件式がtrueになるため、この時tureになった段階でtureとなる
// if(0 == "0" || 0 === "0") {

//変数のみがセットされている時の状態。この場合はNumber(false)なのでfalseとなる。
//num = 10とセットするとtureになる。値が設定されている時はtrueとなりされていない場合false

//!（not演算子）を使うことでnumの変数がfalseの場合はfalseではないということになるのでtrue
//trueの場合はtureではないということになるのでfalse

if (!num) {
  //一般的に2つの値が一致するかどうかというところでif文が制御している
  //===だと一致しないとみなされelseブロックに処理が移りデータの型を含めて一致するか比較
  //==だと一致しているとみなされthis is trueとなり左辺＝右辺のデータの型は比較されない
  //左辺と右辺を合わせてから値を比較する
  //=が一つだけだと、値の比較を行う。
  // 今回は!=なので文字列の０が数字の０に変換された後に＝ではない場合にtrueとなるのでこの場合はfalseとなる
  console.log("this is true");
} else {
  console.log("this is false");
}

// if(false) {
//     //一般的に2つの値が一致するかどうかというところでif文が制御している
//     console.log("this is true");
// } else if(true) {
//     console.log("this is in else if block");
// } else {
//     console.log("this is false");
// }
