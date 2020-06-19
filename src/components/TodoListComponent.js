import React from 'react';

const TodoListComponent = function (props) {
    return (
        <div className="card-action">
            <h5 id="task-title">Added Tasks</h5>
            {props.getAllTodos.total > 0 &&
            <ul className="collection">
                {props.getAllTodos.data.map((item, i) => (
                    <li key={item.id} className="collection-item">
                        {item.title}
                        <a className="delete-item secondary-content"
                           onClick={() => props.onDeleteTodo(i, item.id)}>
                            <i className="fa fa-remove"/>
                        </a>
                        <a className="delete-item secondary-content"
                           onClick={() => props.setEditTodo(item, i)}>
                            <i className="fa fa-pencil"/>
                        </a>
                    </li>
                ))}
            </ul>}
            {props.getAllTodos.total === 0 && !props.getAllTodos.fetching &&
            <div>No Task Available</div>
            }
            {props.getAllTodos.fetching &&
            <div>Loading...</div>
            }
        </div>
    )
};

export default TodoListComponent;