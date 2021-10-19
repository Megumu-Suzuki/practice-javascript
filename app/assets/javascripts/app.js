// アラート表示
// alert('Hello World');

// 変数を用いてアラート表示
// let hello = 'Hello World';
// alert(hello);

// 文字列の結合を持ちてアラート表示
// alert('Hello' + 'World')

// 変数と文字列を用いてアラート表示
// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);

// 条件分岐
// let orange = 100;
// let apple = 120;
// if (orange < apple){
//   alert("みかんの値段がりんごより安い");
// } else if(orange == apple){
//   alert("みかんとりんごが同じ値段")
// } else{
//   alert("みかんの値段がリンゴより高い")
// }

// 繰り返し処理
// while文
// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num*2;
//   count ++;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// for文
let i;
let num = 0;

for(i = 0; i < 11; i++){
  num += i;
}

alert('1から10まで足し算した結果は' + num + 'です');