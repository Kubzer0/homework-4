class ToDo {
    constructor() {
        this.tasks = []
        this.render()
    }
    addTask(text) {
        this.tasks.push(new Task(text))
        this.render()

    }
    render() {
        document.body.innerHTML = ''

        this.makeInterface()

        const ul = document.createElement('ul')

        this.tasks.forEach(task => {
            const li = document.createElement('li')
            li.innerText = task.text
            ul.appendChild(li)
        })
        document.body.appendChild(ul)
    }
    makeInterface() {
        const input = document.createElement('input')
        const buttonAdd = document.createElement('button')
        const buttonDelete = document.createElement('button')
        buttonAdd.innerText = 'Add task to list'
        buttonDelete.innerText = 'Delete task from the list'

        buttonAdd.addEventListener(
            'click',
            () => this.addTask(input.value)
        )

        document.body.appendChild(input)
        document.body.appendChild(buttonAdd)
       
    }
}


class Task {
    constructor(text) {
        this.text = text
    }
}

const toDo1 = new ToDo()

toDo1.addTask('zadanie 1')

toDo1.addTask('zadanie 2')

console.log(toDo1)

