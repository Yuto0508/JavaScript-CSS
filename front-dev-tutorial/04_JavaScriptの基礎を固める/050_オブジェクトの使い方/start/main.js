//｛｝オブジェクトリテラル、オブシェクトを初期化する役割を持つ。
const person = {

  //key(name)とvalue(Code Mafia)のペアで値を登録する。
  // name: 'Code Mafia'
  // person.name: 'Code Mafia'

  //配列で格納することも可能
  //getFullNameのプロパティにfunction()を設定
  //getFullNameのメソッドを選び、console.logにフルネームが出力される
  name: ['Code', 'Mafia'],
  age: 32,
  gender: "male",
  interests: {
    sports: 'soccer',
    music: 'piano'
  },
  //thisというオブジェクトは宣言されたオブジェクトを参照する
  //このオブジェクトの中のnameプロパティという意味。
  //なので name: ['Code', 'Mafia']左の配列の数字0、つまりCodeになる。1はMafia。
  getFullName: function() {
    console.log(this.name[0] + this.name[1])
  }
};


//console.log()にすることでname,age,gender,interestsの文字列を取得
//さらに.interests.sportsにするとサッカーの文字列を取得
//これをドット(.)記法という
//ドッド記法は「ドットの文字列とキー情報の値」を取得
person.age = 12;

//[]ブランケット法、変数を使いたい場合に使用。
  const ageKey = 'age'


//.ageにすることで配列の中身を書き換えることができる
//ドット記法でプロパティの値を指定して変更可能
//jsを記載する場合は上から下の順番でコーディング。
//なのでconsoleの後にコーディングしても反映されない
person[ageKey] =12;
console.log(person.age)
person.getFullName();
