const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// DOM操作
function addList(user) {
  // li要素(HTML要素)を作成
  const list = document.createElement("li");
  list.innerText = user.name;
  // getElementByIdで取得したol要素にli要素作成を追加する。
  lists.appendChild(list);
};

// データのやり取り
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
};

async function listUsers() {
  const users = await getUsers();

  users.forEach(addList);
};

// ブラウザ更新時の処理
window.addEventListener("load", listUsers);

// (ボタンをクリックする度にAPIを叩く)
button.addEventListener("click", listUsers);
