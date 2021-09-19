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

  todoContent.addEventListener('click', editTodo);

  // todoContentにtodo-contentクラスを追加
  todoContent.classList.add('todo-content');

  // newTodo(作成したli要素)にtodoContentの子要素を追加
  newTodo.appendChild(todoContent);


  // 完了 未着手ボタン
  todoList.appendChild(newTodo);
  const checkButton = document.createElement('button');
  checkButton.addEventListener('click', switchState);
  checkButton.innerHTML = '□未着手';
  checkButton.classList.add('check-button');
  newTodo.appendChild(checkButton);

  // 削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', deleteTodo);
  deleteButton.innerHTML = '削除';
  deleteButton.classList.add('delete-button');
  newTodo.appendChild(deleteButton);


  // 上記内容をlistへ追加
  todoList.appendChild(newTodo);

  // 入力フォームの値を消去
  todoInput.value = '';
}

// フォーカスが外れた際（編集完了後）にフィールドを消去する関数
const saveTodoContent = (e) => {
  const itemToSave = e.target;
  const textValue = itemToSave.value;
  if (textValue !== '') {
    itemToSave.parentNode.textContent = textValue;
  }
};

const switchState = (e) => {
  //eはイベントオブジェクトで呼び出し先そのもの
  let checkButton = e.target;
  if (!checkButton.classList.contains('complete')) {
    checkButton.innerHTML = '完了';
    checkButton.classList.add('complete');
  } else {
    checkButton.innerHTML = '□ 未着手';
    checkButton.classList.remove('complete');
  }
};

const deleteTodo = (e) => {
  const todoList = e.target.closest('li');
  todoList.remove();
};

const editTodo = (e) => {
  const itemToEdit = e.target;

  // 編集用のテキストフィールドに置き換える
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('editbox');
  input.setAttribute('value', itemToEdit.textContent);
  itemToEdit.textContent = '';
  itemToEdit.appendChild(input);

  const editContent = itemToEdit.querySelector('.editbox');
  // フォーカスが外れた際（編集完了後）にフィールドを除去するイベントを追加
  editContent.addEventListener('blur', saveTodoContent);
};

addButton.addEventListener('click', addTodo);