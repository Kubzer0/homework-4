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

        this.tasks.forEach((task, index) => {
            const li = document.createElement('li')
            const buttonDelete = document.createElement('button')
            buttonDelete.innerText = 'Delete task from the list'

            buttonDelete.addEventListener('click', () => this.deleteTask(index))
            li.innerText = task.text
            li.appendChild(buttonDelete)
            ul.appendChild(li)
        })
        document.body.appendChild(ul)

    }
    makeInterface() {
        const input = document.createElement('input')
        const buttonAdd = document.createElement('button')
        buttonAdd.innerText = 'Add task to list'


        buttonAdd.addEventListener(
            'click',
            () => this.addTask(input.value)
        )



        document.body.appendChild(input)
        document.body.appendChild(buttonAdd)

    }

    deleteTask(index) {
        this.tasks = this.tasks.slice(0, index).concat(this.tasks.slice(index + 1))
        this.render()
    }
}


class Task {
    constructor(text) {
        this.text = text
    }
}

const toDo1 = new ToDo()


console.log(toDo1)

