const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log(this.first_name);
    const fn = function () {
      console.log(this.first_name);
    };
    //windowはブラウザ側で定義したもの。key情報や値がここで設定されているのでthisはwindowから読み込んでいる
    window.setTimeout(function() {
      console.log(this);
    });
        // window.setTimeout(fn);
  }
};

// const window = {
//   setTimeout: function(fn) {
//     fn();
//   }
// }

//下のthisは生成されるオブジェクトを参照する(classのみではオブジェクトは生成されていない)
class MyObj {
  constructor() {
    this.first_name = "Mafia";
    this.last_name = "Code";
  }

  printFullName() {
    console.log(this.first_name);
    const fn = function () {
      console.log(this);
    };
    // window.setTimeout(fn);
  }
}

const obj2 = new MyObj();

obj.printFullName();
obj2.printFullName();
