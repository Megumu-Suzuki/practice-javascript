// // 関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// let alertString;
// alertString = addString("WebCamp");

// alert(alertString)


// // 入力ダイアログ
// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);


// ジャンケン
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// グー、チョキ、パー以外かつキャンセルじゃなかったら
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// 相手の選んだ手
let js_hand = getJShand();

// 勝敗結果
let judge = winLose(user_hand, js_hand);

// キャンセルでなかったら
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// 相手が手を選び関数
function getJShand(){
  // Math.floor( Math.random() * 3 )は、0～2までのランダムな整数値を生成
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand;
  if (js_hand_num == 0){
    hand = "グー";
  } else if (js_hand_num == 1){
    hand = "チョキ";
  } else if (js_hand_num == 2){
    hand = "パー";
  }
  return hand;
}

// ジャンケンの勝敗を判定する関数
function winLose(user, js){
  let winLoseStr;
  if (user == "グー"){
    if (js == "グー"){
      winLoseStr = "あいこ";
    } else if (js == "チョキ"){
      winLoseStr = "勝ち";
    } else if (js == "パー"){
      winLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if (js == "グー"){
      winLoseStr = "負け";
    } else if (js == "チョキ"){
      winLoseStr = "あいこ";
    } else if (js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if (user == "パー"){
    if (js == "グー"){
      winLoseStr = "勝ち";
    } else if (js == "チョキ"){
      winLoseStr = "負け";
    } else if (js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}