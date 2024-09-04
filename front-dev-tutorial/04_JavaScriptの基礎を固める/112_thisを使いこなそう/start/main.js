document.addEventListener("DOMContentLoaded", function () {
  //id=btnのhtml要素をDOMとして取得
  const btn = document.querySelector('#btn');
  const ta = new  TextAnimation(".animate-title");
  console.log(ta);
  const ta2 = new  TextAnimation(".animate-title-2");
  console.log(ta2); 
    ta.animate();
    ta2.animate();
    //addEventListenerでクリックイベントを実行する際、thisの影響でうまくいかない場合に無名関数のfunction()を使う(.bindを使用しない場合)
    // btn.addEventListener("click", ta.animate.bind(ta));
    // });
    btn.addEventListener("click", function() {
      ta.animate()
    });
  });


// 格納した値をメソッド内で使用できるのがclassという演算子
class TextAnimation {
  //classが初期化されるタイミングで呼ばれる
  constructor(el) {
    console.log(this);
    this.el = document.querySelector(el);
    this.chars = this.el.innerHTML.trim().split("");
    this.el.innerHTML = this._splitText();
  }
  _splitText() {
    return this.chars.reduce((acc, curr) => {
    curr = curr.replace(/\s+/, "&nbsp;");
    return `${acc}<span class="char">${curr}</span>`;
   }, "");
  }
  animate() {
    console.log(this);
    this.el.classList.toggle("inview");
  }
  // animate() {
  //   //Textanimetionを参照
  //   console.log(this);
  //   // windowオブジェクトが呼ばれている(this=windowオブジェクト)
  //   window.setTimeout(function() {
  //     console.log(this);
  //     this.el.classList.toggle("inview");
  //     //.bindは外側のThisを一致させる
  //   }.bind(this));
  // }
}             