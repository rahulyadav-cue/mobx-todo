import React from 'react';

const EditTaskComponent = function (props) {
    return (
        <div className="card-content">
            <span className="card-title">Update Task</span>
            <div className="row">
                <div className="col-md-12">
                    <form id="task-form" onSubmit={props.onEditTodo}>
                        <div className="form-group">
                            <input className="form-control" type="text" name="editInput"
                                   id="addInput" autoComplete="off" value={props.editInput}
                                   onChange={props.handleInput}/>
                        </div>
                        <button type="submit" className="btn">Update Task</button>
                        <button type="button" className="btn ml-2" onClick={props.cancelEdit}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTaskComponent;