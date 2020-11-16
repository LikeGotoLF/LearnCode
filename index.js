let checkList = document.getElementById('checkList')
let liArr = checkList.querySelectorAll('li')
let inputs = checkList.querySelectorAll('input')
for (let i = 0; i < liArr.length; i++) {
  liArr[i].addEventListener('click', edit)
  inputs[i].addEventListener('blur', change)
  inputs[i].addEventListener('keypress', handle)
}
function edit() {
  let input = this.querySelector('input')
  this.className = 'edit'
  input.focus()
  input.setSelectionRange(0, input.value.length)
}
function change() {
  this.previousElementSibling.innerHTML = this.value
  this.parentNode.className = ''
}
function handle(event) {
  if (event.which === 13) {
    change.call(this)
  }
}
