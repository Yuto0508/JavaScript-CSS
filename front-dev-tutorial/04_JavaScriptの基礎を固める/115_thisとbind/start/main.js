const obj = {
  first_name: "Mafia",
  last_name: "Code",
  printFullName: function () {
    console.log(this);
    //特定のthisをとりたい場合
    // const _that = this;

    //bindのオブジェクトを使ってthisが参照される
    window.setTimeout(function () {
      console.log(this);
    }.bind({first_name: "Taro"}));
  },
};

obj.printFullName();
