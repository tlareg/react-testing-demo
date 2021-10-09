import React from 'react';
import { render, screen } from '@testing-library/react';

import { TodoList } from './TodoList';

describe('TodoList', () => {
  test('renders TodoList component', async () => {
    render(<TodoList />);
    // screen.debug();
  });

  test("'use React Testing Library' item should be present after items loaded", async () => {
    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByText(
      /use React Testing Library/
    );
    expect(reactTestingTodoItem).toBeInTheDocument();
  });

  test("'use React Testing Library' item initially should NOT be completed", async () => {
    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByText(
      /use React Testing Library/
    );
    expect(reactTestingTodoItem).not.toHaveClass('todo-item--completed');
  });

  // TODO: test toggling item, test toggling item 2 times
});
