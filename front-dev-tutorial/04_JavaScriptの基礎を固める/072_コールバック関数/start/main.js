// //callback関数
// //引数に渡す関数のことをcallback関数

// //70行目の第二引数がcallbackに渡される
// //こちらの第一引数をlastnameにする
// //lastnameがnameという引数になる
// //hello CodeMafiaとコンソールにて表示
// function hello (callback, lastname)  {
//     console.log ("hello " + callback(lastname));
// }

// function getName() {
//     return "Code Mafia";
// }

// hello (getName);

// //引数のnameがgetName関数が渡ってくる
// //nameに()関数を書くとhello Code Mafiaとなる
// //getNameが引数のnameに渡される。name⇒getNameに変わる
// // function hello (name)  {
// //     console.log ("hello " + name() );
// // }
// //getName関数が実行される、getName()がCode Mafiaと返される
// function getName() {
//     return "Code Mafia";
// }
// hello (getName);

// //helloという関数を実行するときgetNameを渡す

// //末尾に()つけるとエラー、関数を実行する意味になるから
// //関数を実行した結果がhelloに引数として渡される
// //結果として戻り値となる
// //関数を実行するとCode Mafiaが戻り値としてhelloに渡される

// //callback関数にCode Mafiaの文字列の引数が渡される

// // function hello (callback)  {
// //     console.log ("hello " + callback());
// // }

// function getName() {
//     return "Code Mafia";
// }

// hello (getName);

// //こちらはhello Codeと返される
// //関数を渡すことで渡された関数内で実行できる(callback())
// // function getFirstName(){
// //     return "Code";
// // }
// //constで書く場合
// const getFirstName = function(name) {
//     return "Code" + name;
// }

// hello(getFirstName, "Mafia");

// //無名関数の利用する場合の記法
// hello(function() {
//     return "Code";
// });

// //アロー関数で書く場合
// // hello(() =>"Code");

// //callback関数の引数であるlastnameがこの無名関数に渡る
// //引数nameを渡し、+nameと記入
// //第二引数にMafiaを設定
// hello(function(name) {
//     return "Code" + name;
// },"Mafia");

function dosomething(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}
//callback関数で掛け算の場合
function multiply(a, b) {
  return a * b;
}
dosomething(2, 2, multiply);
//callback関数で足し算の場合
function plus(a, b) {
  return a + b;
}
dosomething(2, 3, plus);
