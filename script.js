const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const btn = document.querySelector('.btn');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)
btn.addEventListener('click', addTask)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}



let val = document.querySelector('textarea');
let tasks = [];

function addTask(val) {
    tasks.push(val.value)
    let newElem = document.createElement('div');
    newElem.classList.add('.item')
    let inner = newElem.innerHTML + `${val.value}`
    placeholders.appendChild(inner)
    clearTextarea()

    console.log(val.value)
}

function clearTextarea() {
    val.value = ''
}