const obj = {
    first_name:'Mafia',
    last_name:'Code',
    printFullName: function() {
        console.log('hello');
    }
}

class Myobj {
    constructor() {
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }

    printFullName() {
        console.log('hello');
    }

}

//new演算子
const obj2 = new Myobj();


obj.printFullName();
obj2.printFullName();

//jsはclassという演算子を用いてオブジェクトを初期化する処理を記載するもの
//first_name,last_name,printFullNameというプロパティに値が設定されるものが生成される