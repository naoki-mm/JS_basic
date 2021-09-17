const messageField = document.getElementById('message-field')
const button = document.getElementById('message-button')
const messageList = document.getElementById('message-list')

const addMessage = () => {
  messageList.insertAdjacentHTML('afterbegin', `<p>${messageField.value}</p>`)
  messageField.value = ''
}

button.onclick = () => addMessage()

messageField.onkeydown = (e) => {
  if (e.keyCode == '13') addMessage()
}