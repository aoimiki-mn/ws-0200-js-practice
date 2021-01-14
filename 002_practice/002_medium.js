/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  let len = str.length;
  let arraySplit = str.split('');
  let answer = "";
  num = len - num ;
  if (num >= len) {
    num = num - len ;
  }
  for (var i = 0; i < str.length; i++) {
  answer = answer + arraySplit[num];
  console.log(num);
  num = num + 1;
  console.log(num);
  if (num === len) {
    num = num - len;
    console.log("Hello");
  }
 }
 console.log(answer);
}


/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
function removeVowels(str) {
  const vowels = ["a","i","u","e","o"];
  let arraySplit = str.split('');
  let answer = "";
  for (var i = 0; i < str.length; i++) {
    for (var k = 0; k < 5; k++) {
      if (arraySplit[i] == vowels[k]) {
        arraySplit[i] = "";
      }
    }
    answer = answer + arraySplit[i];
  }
  console.log(answer);
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
function countStr(s1, s2) {
  let s1Split = s1.split('');
  let s2Split = s2.split('');
  let count = 0 ;
  let len = s2Split.length;
  for (var i = 0; i < s1Split.length; i++) {
    if (s1.substring(i,i + s2Split.length) == s2) {
      count ++ ;
    }
  }
  console.log(count);
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

function isPalindrome(str) {
  let restr = "";
  let strSplit = str.split('');
  for (var i = str.length -1 ; 0 <= i; i--) {
    restr = restr + strSplit[i] ;
  }
  if (str == restr) {
    console.log('ture');
  }else {
    console.log('false');
  }
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
function isPrime(num) {
  if (num == 2) {
    return true ;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        // return false ;
        console.log(i);
      }
    }
    // return true ;
  }
}

// function isPrime(num) {
//   if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
//     return false;
//   }else {
//     return true;
//   }
// }



/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let answer = 0 ;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == 4) {
      i ++ ;
    }else {
      answer = answer + array[i];
    }
  }
  console.log(answer);
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
