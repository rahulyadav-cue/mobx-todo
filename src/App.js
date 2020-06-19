import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import './App.css'
import TodoListComponent from "./components/TodoListComponent";
import AddTaskComponent from "./components/AddTaskComponent";
import EditTaskComponent from "./components/EditTaskComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editId: '',
            editIndex: -1,
            addInput: '',
            editInput: '',
            editTodo: false
        };
    }

    componentDidMount() {
        this.props.todoStore.getTodos();
    }

    onAddTodo = (evt) => {
        evt.preventDefault();
        const title = this.state.addInput.trim();
        if (title) {
            this.props.todoStore.addTodo({title}).then(() => {
                this.setState({'addInput': ''});
            });
        }
    };

    setEditTodo = (data, index) => {
        this.setState({
            editTodo: true,
            editId: data.id,
            editIndex: index,
            editInput: data.title
        });
    };

    onEditTodo = (evt) => {
        evt.preventDefault();
        const data = {
            id: this.state.editId,
            title: this.state.editInput,
            index: this.state.editIndex
        };
        this.props.todoStore.editTodo(data).then(() => {
            this.setState({editTodo: false});
        });
    };

    onDeleteTodo = (i, id) => {
        this.props.todoStore.deleteTodo(i, id);
        this.setState({editTodo: false});
    };

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    cancelEdit = () => {
        this.setState({editTodo: false});
    };

    render() {
        return (
            <div>
                <div className="center-align">
                    <h4>ToDo List</h4>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="main" className="card">
                                {!this.state.editTodo &&
                                <AddTaskComponent
                                    {...this.state}
                                    onAddTodo={this.onAddTodo}
                                    handleInput={this.handleInput}
                                />
                                }

                                {this.state.editTodo &&
                                <EditTaskComponent
                                    {...this.state}
                                    onEditTodo={this.onEditTodo}
                                    handleInput={this.handleInput}
                                    cancelEdit={this.cancelEdit}
                                />
                                }

                                <TodoListComponent
                                    getAllTodos={this.props.todoStore.getAllTodos}
                                    onDeleteTodo={this.onDeleteTodo}
                                    setEditTodo={this.setEditTodo}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject('todoStore')(observer(App));
