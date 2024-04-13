let addButton = document.getElementById('addTask')
let taskInput = document.getElementById('taskInput')
let taskList = document.getElementById('taskList')

function addTask(){
    let task = taskInput.value.trim()

    if(task){

        creatTaskElement(task)

        taskInput.value = ''
    }else{
        alert('please print')
    }
}


addButton.addEventListener('click',addTask)

function creatTaskElement(task){
    
    let listItem = document.createElement('li')

    listItem.textContent = task

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'
    deleteButton.className = 'deleteTask'
    
    listItem.appendChild(deleteButton)
    taskList.appendChild(listItem)

    deleteButton.addEventListener('click',function(){
        taskList.removeChild(listItem)
    })
}