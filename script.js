(function () {
    class ToDo {
        constructor(appendLocation) {
            this.tasks = JSON.parse(localStorage.getItem('toDoList')) || []
            this.appendLocation = appendLocation || document.body
            this.render()
        }
        addTask(text) {
            this.tasks.push(new Task(text))
            this.updateTasksInLocalStorage()
            this.render()

        }
        render(tasks) {

            const array = tasks || this.tasks

            this.appendLocation.innerHTML = ''

            this.makeInterface()

            const ul = document.createElement('ul')

            array.forEach((task, index) => {
                const li = document.createElement('li')
                const buttonDelete = document.createElement('button')
                buttonDelete.innerText = 'Delete task from the list'

                buttonDelete.addEventListener('click', () => this.deleteTask(index))

                li.addEventListener('click', () => this.toggleTask(task))

                this.taskIsCompletedStyle(task, li)

                li.innerText = task.text
                li.appendChild(buttonDelete)
                ul.appendChild(li)
            })
            this.appendLocation.appendChild(ul)

        }
        makeInterface() {
            const input2 = document.createElement('input')
            const input = document.createElement('input')
            const buttonAdd = document.createElement('button')
            const buttonFilter = document.createElement('button')
            buttonAdd.innerText = 'Add task to list'
            buttonFilter.innerText = 'Filter Tasks'


            buttonAdd.addEventListener(
                'click',
                () => this.addTask(input.value)
            )

            buttonFilter.addEventListener(
                'click',
                () =>{ this.filterTasks(input2)}
            )


            this.appendLocation.appendChild(input)
            this.appendLocation.appendChild(buttonAdd)
            this.appendLocation.appendChild(input2)
            this.appendLocation.appendChild(buttonFilter)

        }

        deleteTask(index) {
            this.tasks = this.tasks.slice(0, index).concat(this.tasks.slice(index + 1))
            this.updateTasksInLocalStorage()
            this.render()
        }

        toggleTask(task) {
            if (task.isCompleted === true) {
                task.isCompleted = false
            } else {
                task.isCompleted = true
            }
            this.render()
        }

        taskIsCompletedStyle(task, li) {
            if (task.isCompleted === false) {
                li.style.textDecoration = "none"
            } else {
                li.style.textDecoration = "line-through"
            }
        }

        updateTasksInLocalStorage() {
            localStorage.setItem('toDoList', `${JSON.stringify(this.tasks)}`)
        }

        filterTasks(input2) {
            const filteredArray = this.tasks.filter((element) => element.text === input2.value)
            this.tasks = []
            this.updateTasksInLocalStorage()
            console.log(filteredArray)
            this.render(filteredArray)
        }

    }


    class Task {
        constructor(text) {
            this.text = text
            this.isCompleted = false
        }
    }

    window.ToDo = ToDo
})()

toDo1 = new ToDo
