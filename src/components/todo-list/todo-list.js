import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, 
                    onDeleted,
                    onToogleDone, 
                    onToogleImportant }) => {
  const elements = todos.map(({id, ...itemProps}) => {
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps} 
          onDeleted={() => onDeleted(id)}
          onToogleDone={() => onToogleDone(id)}
          onToogleImportant={() => onToogleImportant(id)} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }  
    </ul>
  );
};

export default TodoList;