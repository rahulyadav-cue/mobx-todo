import React from 'react';

const AddTaskComponent = function (props) {
    return (
        <div className="card-content">
            <span className="card-title">Add Task</span>
            <div className="row">
                <div className="col-md-12">
                    <form id="task-form" onSubmit={props.onAddTodo}>
                        <div className="form-group">
                            <input className="form-control" type="text" name="addInput"
                                   id="addInput" autoComplete="off" value={props.addInput}
                                   onChange={props.handleInput}/>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTaskComponent;