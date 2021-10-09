import React from 'react';
import { render, screen } from '@testing-library/react';

import { TodoList } from './TodoList';

describe('component TodoList', () => {
  it('renders', async () => {
    expect.assertions(0);

    render(<TodoList />);
    // screen.debug();
  });

  it("should show 'use React Testing Library' item after items loaded", async () => {
    expect.hasAssertions();

    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByText(
      /use React Testing Library/
    );
    expect(reactTestingTodoItem).toBeInTheDocument();
  });

  it("should show 'use React Testing Library' item NOT completed", async () => {
    expect.hasAssertions();

    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByText(
      /use React Testing Library/
    );
    expect(reactTestingTodoItem).not.toHaveClass('todo-item--completed');
  });

  // TODO: test toggling item, test toggling item 2 times
});
