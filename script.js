class ToDo {
constructor(){
    this.tasks= []
}
addTask (text) {
    this.tasks.push(text)
}
}

const toDo1 = new ToDo()

toDo1.addTask('zadanie 1')

console.log(toDo1)

