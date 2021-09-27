// Windowに実行しますかと表示させて、実行と入力すると、リポジトリを削除と表示する処理

// 関数を引数とした高階関数を定義
function confirmed(fn) {
    // windowに実行しますか？の表示と入力欄を表示させる。
    const input = window.prompt("実行しますか？");
    // 入力欄に実行を入力すると、fn(コールバック関数)が実行される。
    if (input === "実行") {
        fn();
    }
}

// confirmedを呼び出す処理の引数にコールバック関数を定義
confirmed(function () {
    console.log("リポジトリを削除");
});


// Windowに実行しますかと表示させて、実行と入力すると、リポジトリを削除と表示する処理
// (コールバック関数に処理を記述)

// 関数を引数とした高階関数を定義
function confirmed(fn) {
    // windowに実行しますか？の表示と入力欄を表示させる。
    const input = window.prompt("実行しますか？");
    // 
    // fnが実行された際に, 呼び出しがわでinputが定義されているので、引数を渡してないとエラーのなるのでinputを渡している。
    fn(input);
}

// confirmedを呼び出す処理の引数にコールバック関数を定義
confirmed(function (input) {
    if (input === "実行") {
        console.log("リポジトリを削除");
    }
});