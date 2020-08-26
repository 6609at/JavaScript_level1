//создаем блок в который поместим еще один блок для доски
var Wrap = document.createElement('div');
Wrap.classList.add('top-wrap');
document.body.appendChild(Wrap);




function generateChess() {

  //создаем вторую кнопку для генерации фигур
  let btn1 = document.createElement('button');
  btn1.setAttribute('type', 'button');
  btn1.setAttribute('onclick', 'chessboard()');
  btn1.setAttribute('id', 'BtnSecond')
  document.body.prepend(btn1);
  btn1.innerHTML = 'Сгенерировать фигуры';

  //удаляем кнопку после нажатия
  let delBtn = document.querySelector('#BtnFirst');
  delBtn.remove();


  //создаем блок для самой доски
  var chessWrap = document.createElement('div');
  Wrap.appendChild(chessWrap);
  chessWrap.classList.add('ch-wrap');
  let i = 0, count = 0;
  while (count < 8 * 8) {
    var item = document.createElement('div');
    chessWrap.appendChild(item);
    item.classList.add('ch-item');

    if (i && i % 2)
      item.classList.add('ch-black')
    i += ((i + 2) % 9) ? 1 : 2;
    count++;
  }
  bot();



}


function chessboard() {
  let delBtn2 = document.querySelector('#BtnSecond');
  delBtn2.remove();

  let elem = document.getElementsByClassName('ch-item');
  let blackFigs1 = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'];
  var blackFigs2 = ['&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;'];
  let whiteFigs2 = ['&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;'];
  let whiteFigs1 = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9821;', '&#9815;', '&#9814;'];
  /* console.log(elem); */

  for (let i = 0; i < 8; i++) {
    /* console.log(blackFigs1[i]); */
    elem[i].innerHTML = blackFigs1[i];
  }
  for (let i = 8; i < 16; i++) {
    /* console.log(elem[i]); */
    elem[i].innerHTML = blackFigs2[i - 8];
  }
  for (let i = 48; i < 56; i++) {
    elem[i].innerHTML = whiteFigs2[i - 48];
  }
  for (let i = 56; i < 64; i++) {
    elem[i].innerHTML = whiteFigs1[i - 56];
  }
}

var bot = function bot() {
  //создаем див для текста доски сниззу
  let textBottomWrp = document.createElement('div');
  Wrap.appendChild(textBottomWrp);
  textBottomWrp.classList.add('tx-bot-wr');
  function txBot() {
    let elemBot = document.getElementsByClassName('tx-bot-wr');
  } 

  //создаем div для текста доски сверху
  let textTopWrp = document.createElement('div');
  Wrap.prepend(textTopWrp);
  textTopWrp.classList.add('tx-top-wr');

  //создаем div для цифр доски слева
  let numLeftWrp = document.createElement('div');
  Wrap.prepend(numLeftWrp);
  numLeftWrp.classList.add('nm-left-wr');

  //создаем div для цифр доски слева
  let numRigWrp = document.createElement('div');
  Wrap.prepend(numRigWrp);
  numRigWrp.classList.add('nm-right-wr');



}

/* let b = 0;
let textBot = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let elemb = document.getElementsByClassName('tx-bot-wr');
while (b < 8) {
  var item2 = document.createElement('div');
  textBottomWrp.appendChild(item2);
  item2.classList.add('tx-bot-item');
  b++
}
for (let i = 0; i < 8; i++) {
  elemb[i].innerHTML = textBot[i];
} */