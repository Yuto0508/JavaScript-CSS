const str = "animation";
const strArry = str.split("");

function tag(accu, curr) {
  return `${accu}<${curr}>`;
}

const result = strArry.reduce(tag, "");
//第一引数にarry、callback、初期値のdefaultValueと定義
function reduce(arry, callback, defaultValue) {
    
}

console.log(result);
