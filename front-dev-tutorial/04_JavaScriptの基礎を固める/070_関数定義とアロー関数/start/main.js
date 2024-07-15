//helloと名前が出力される
// function hello (name = "Tom") {
//     console.log("hello" + name);
// }

//アロー関数。無名関数のfunctionから＝＞に変えるだけで定義づけできる。{}波括弧も省力可能
const hello = (name = "Tom") => 
    console.log("hello" + name);
 
//最終的に引数の()を省略できる
// const hello = name => 
//     console.log("hello" + name + age);

//アロー関数(省略)
// const hello = (name, age) => {
//     console.log("hello" + name + age);
//     console.log("hello" + name+ age);
// }

//helloがアロー関数の戻り値として設定できる。
//戻り値は40となる
// const hello = (name, age) =>40;
// console.log(hello());

//上記記述の簡略ver.
const hello = (name, age) =>40;
const arry = [1,2,3,4,5,6];
arry.forEach(value => console.log(value));


// hello("Code Mafia", 10);
// hello("Code Mafia 2", 20);



// hello("Code Mafia");
// hello("Code Mafia 2");
// hello();

//function()をつけて(変数)をつける場合は後ろからつけても読み取れる。constの場合は読み取れなくエラーになる。

// function hello (name = "Tom") {
//     console.log("hello" + name)
// }

// const hello = function (name = "Tom") {
//     console.log("hello" + name)
// }