const addButton = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

const addTodo = () => {
  if (todoInput.value === '') return;
  // 空欄ならタスクを追加しない
  const newTodo = document.createElement('li');

  //span要素を作成してtodoContentに代入
  const todoContent = document.createElement('span');

  //todoInputに入力された値をtodoContentのテキストに代入
  todoContent.innerText = todoInput.value;

  // todoContentにtodo-contentクラスを追加
  todoContent.classList.add('todo-content');

  // newTodo(作成したli要素)にtodoContentの子要素を追加
  newTodo.appendChild(todoContent);


  // 完了 未着手ボタン
  todoList.appendChild(newTodo);
  const checkButton = document.createElement('button');
  checkButton.innerHTML = '□未着手';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '削除';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);


  // 上記内容をlistへ追加
  todoList.appendChild(newTodo);

  // 入力フォームの値を消去
  todoInput.value = '';
}

addButton.addEventListener('click', addTodo);