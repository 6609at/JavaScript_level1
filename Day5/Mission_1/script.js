//создаем блок в который поместим еще один блок для доски
var Wrap = document.createElement('div');
Wrap.classList.add('top-wrap');
document.body.appendChild(Wrap);




function generateChess() {

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

  
  
}

function chessboard() {
  let i = 0;
  
  let blackFigs1 = [ '&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'];
  let whiteFigs1 = ['&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9821;','&#9815;','&#9814;'];
  let blackFigs2 = ['&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;'];
  let whiteFigs2 = ['&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;'];

  let elem = document.querySelectorAll('.ch-item');
  for ( let a = 0; a < 11; a++) {
    
    document.querySelector('.ch-item').innerHTML += '1';
  }
  
  

  

}

