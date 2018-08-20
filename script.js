const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var listItem = document.createElement("li");
  var counter = parseInt(itemCountSpan.innerHTML[0])
  counter++
  itemCountSpan.innerHTML=counter
  list.append("Todo",listItem) 
}
