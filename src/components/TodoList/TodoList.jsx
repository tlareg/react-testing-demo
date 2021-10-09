import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { LoadingOverlay } from 'root/components/LoadingOverlay';
import * as todoService from 'root/services/todoService';

import './TodoList.css';

export const TodoList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(async () => {
    setIsLoading(true);
    const items = await todoService.fetchTodoList();
    setTodoItems(items);
    setIsLoading(false);
  }, []);

  const sendCompletedUpdate = async name => {
    setIsLoading(true);
    const items = await todoService.toggleCompleted(name);
    setTodoItems(items);
    setIsLoading(false);
  };

  return (
    <LoadingOverlay isLoading={isLoading}>
      <ul className='TodoList'>
        {todoItems.map(({ name, completed }) => (
          <li
            key={name}
            className={cn('todo-item', { 'todo-item--completed': completed })}
            data-testid={name}
            onClick={() => sendCompletedUpdate(name)}
          >
            <div>{name}</div>
            <div>{completed ? '✓' : ''}</div>
          </li>
        ))}
      </ul>
    </LoadingOverlay>
  );
};
