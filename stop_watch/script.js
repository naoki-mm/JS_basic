// ディスプレイの秒数
let seconds = 0
// 1秒ごとにディスプレイに 1 追加するタイマー処理(setInterval) 用の変数
let timer
// ディスプレイ
const display = document.getElementById('display')
// スタート・ストップボタン
const startStopButton = document.getElementById('start-stop')
// リセットボタン
const resetButton = document.getElementById('reset')

// 「スタート」「ストップ」ボタンがクリックされたとき
startStopButton.onclick = () => {
  if (startStopButton.innerText === "スタート") {

    // 1秒(1000ミリ秒)ごとに addSecond 関数を呼び出す（1秒ごとにディスプレイの数値が1増えるようにする）
    timer = setInterval(addSecond, 1000)

    // 「スタート」ボタンの場合

    // 「スタート」ボタンを「ストップ」ボタンに変更
    startStopButton.innerText = "ストップ"
  } else {
    // 「ストップ」ボタンの場合
    // 1秒ごとにディスプレイの数値が1増える処理を終了させる
    clearInterval(timer)
    
    // 「ストップ」ボタンを「スタート」ボタンに変更
    startStopButton.innerText = "スタート"
  }
}

// ディスプレイの秒数を1増やす処理
const addSecond = () => {
  // 秒数を1追加
  ++seconds
  // 秒数をディスプレイに反映
  display.innerText = seconds
}

// 「リセット」ボタンがクリックされたとき
resetButton.onclick = () => {
  display.innerText = seconds = 0
  clearInterval(timer)
  startStopButton.innerText = "スタート"
}