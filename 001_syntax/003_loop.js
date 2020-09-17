/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  var i = -1;
  do{
    i += 1;
    console.log(i);
  }while(i<11);
}

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  var i = 11;
  do{
    i -= 1;
    console.log(i);
  }while(i>-1);
}

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  var i = -1 ;
  while (i<11) {
    i += 1;
    console.log(i);
  }
}

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  var i = 11 ;
  while (i>-1) {
    i -= 1;
    console.log(i);
  }
}

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
