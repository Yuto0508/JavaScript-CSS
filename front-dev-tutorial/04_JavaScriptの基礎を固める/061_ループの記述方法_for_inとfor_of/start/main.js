const arry = [1, 2, 3, 4, 5, 6];

//for inを使って配列をループする。添え字で0,1,2,3,4,5(インデックス)が格納。
//(arry[i])にすると1~6と値を取得できる。
//(i,arry[i])にすることで値を一括で見れる。
//  for (let i in arry) {
//     console.log(i,arry[i]);
//  }

//for ofではiに格納されているのが添え字ではなく値が格納されていることがわかる
//for inだと添え字が渡るが、ofとした場合には値が渡ってくる。inは数字が渡る、ofは値が渡る
 for (let i in arry) {
    let v =arry[i];
    console.log(v);
 }
