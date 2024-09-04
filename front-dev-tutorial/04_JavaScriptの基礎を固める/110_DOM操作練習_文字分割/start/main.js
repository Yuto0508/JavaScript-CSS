document.addEventListener('DOMContentLoaded', function() {
 const el = document.querySelector(".animate-title");
 const str = el.innerHTML.trim().split("");

 document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector(".animate-title");
  const str = el.innerHTML.trim().split("");
 });

// str.reduce((acc,curr) => {
//     curr = curr.replace(/\s+/, '&nbsp;');
//      return `${acc}<span class="char">${curr}</span>`;
//  }, "");

//空文字で初期化
// let concatStr = '';
//テンプレートリテラル${}でバックティックを記載
// 空白を入れたいときは&nbsp;(本来は改行禁止)を置き換え。
// c = c.replace(' ', '&nbsp;');
//  for(let c of str) {
//     c = c.replace(/\s+/, '&nbsp;');
//     concatStr += `<span class="char">${c}</span>`;
//  }
//  el.innerHTML = concatStr;

//reduceプロパティをつけてfor文
 el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
  }, "");
});

el.innerHTML = str.reduce((acc, cuur) => {
  curr = curr.replace(/\s+/, "&nbsp;");
  return `${acc}<span class="char">${curr}</span>`;
});