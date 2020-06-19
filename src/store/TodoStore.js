import {action, computed, decorate, observable, toJS} from 'mobx'
import * as firestore from '../firestore';

export class Todo {
    constructor({title, id}) {
        this.title = title;
        this.id = id;
    }

    setTitle(title) {
        this.title = title;
    }
}

decorate(Todo, {
    title: observable
});


export class TodoStore {
    fetching = true;
    todos = [];
    testOb = '';

    get getAllTodos() {
        return {
            data: this.todos,
            fetching: this.fetching,
            total: this.todos.length
        };
    }

    async addTodo({title}) {
        const inputData = {
            title
        };

        firestore.addTodo(inputData).then((data) => {
            this.todos.push(new Todo(data));
        });
    }

    deleteTodo(i, id) {
        this.testOb = 'Deleted';
        firestore.deleteTodo(id).then(() => {
            this.todos.splice(i, 1);
        });
    }

    getTodos() {
        firestore.getTodos().then((data) => {
            this.todos = data;
            this.fetching = false;
        });
    }

    async editTodo({id, title, index}) {
        const listTodo = toJS(this.todos);
        firestore.editTodo(id, {title}).then(() => {
            listTodo[index].title = title;
            this.todos = listTodo;
        });
    }
}

decorate(TodoStore, {
    todos: observable,
    testOb: observable,
    fetching: observable,
    getAllTodos: computed,
    editTodo: action
});