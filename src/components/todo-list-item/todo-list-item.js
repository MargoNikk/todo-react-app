import React from 'react';
import './todo-list-item.css';

const TodoListItem = ( { label,
                         onDeleted,
                         onToogleImportant,
                         onToogleDone,
                         done,
                         important }) => {

    let classNames = 'todo-list-item-label';

    if (done) {
        classNames += ' done';
    }

    if (important) {
        classNames += ' important';
    }

    return (
        <span className="todo-list-item">
            <span
                className={classNames}
                onClick={onToogleDone}>
                {label}
            </span>

            <button type="button"
                onClick={onToogleImportant}
                className="btn btn-outline-success btn-sm float-end">
                <i className="bi bi-exclamation"></i>
            </button>

            <button type="button"
                onClick={onDeleted}
                className="btn btn-outline-danger btn-sm float-end">
                <i className="bi bi-trash"></i>
            </button>
        </span>
    );
}

export default TodoListItem;