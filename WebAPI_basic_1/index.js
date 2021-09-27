// 実際にAPIを叩く処理
// (今回のAPIの叩き方は、asyncとawaitを使う主流のやり方。他にも方法はある。)
// asyncを付けると、非同期関数となる。非同期関数の中ではawaitが使える。
async function callApi() {
  //APIのレスポンスを格納 (asyncなしでwindowのfetchメソッドのみ使うとPromiseという形で返ってくる。)
  // awaitを使うとResponseが返ってくる。
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // resが持っているjsonを使うことで、扱いやすいデータに変換する。
  const users = await res.json();
  console.log(users);
}

callApi();