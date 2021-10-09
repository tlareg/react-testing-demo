import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TodoList } from './TodoList';
import * as todoService from 'root/services/todoService';

const setupTodoService = () => {
  todoService.setNetworkDelay(0);
  todoService.resetItems();
  return todoService;
};

describe('component TodoList', () => {
  it('renders', async () => {
    expect.assertions(0);

    render(<TodoList />);
    // screen.debug();
  });

  it("should show 'use React Testing Library' item after items loaded", async () => {
    expect.hasAssertions();

    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByTestId(
      /use React Testing Library/
    );

    expect(reactTestingTodoItem).toBeInTheDocument();
  });

  it("should show 'use React Testing Library' item NOT completed", async () => {
    expect.hasAssertions();
    setupTodoService();

    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByTestId(
      /use React Testing Library/
    );

    expect(reactTestingTodoItem).not.toHaveClass('todo-item--completed');
  });

  it("should show 'use React Testing Library' item as completed after clicking on item", async () => {
    expect.hasAssertions();
    setupTodoService();

    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByTestId(
      /use React Testing Library/
    );
    const loadingOverlay = await screen.findByTestId(/LoadingOverlay/);

    // not completed before clicking
    expect(reactTestingTodoItem).not.toHaveClass('todo-item--completed');
    expect(loadingOverlay).toBeInTheDocument();

    // loading spinner not displayed
    expect(loadingOverlay).not.toHaveClass('LoadingOverlay--isLoading');

    userEvent.click(reactTestingTodoItem);

    // after click loading spinner is displayed and we need to wait for loading to finish
    expect(loadingOverlay).toHaveClass('LoadingOverlay--isLoading');
    await waitFor(() => {
      expect(loadingOverlay).not.toHaveClass('LoadingOverlay--isLoading');
    });

    // after loading finished todo item should be marked as completed
    expect(reactTestingTodoItem).toHaveClass('todo-item--completed');
  });

  it("should show 'use React Testing Library' item as NOT completed after clicking on item 2 times", async () => {
    expect.hasAssertions();
    setupTodoService();

    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByTestId(
      /use React Testing Library/
    );
    const loadingOverlay = await screen.findByTestId(/LoadingOverlay/);

    expect(reactTestingTodoItem).not.toHaveClass('todo-item--completed');
    expect(loadingOverlay).toBeInTheDocument();
    expect(loadingOverlay).not.toHaveClass('LoadingOverlay--isLoading');

    userEvent.click(reactTestingTodoItem);

    expect(loadingOverlay).toHaveClass('LoadingOverlay--isLoading');
    await waitFor(() => {
      expect(loadingOverlay).not.toHaveClass('LoadingOverlay--isLoading');
    });
    expect(reactTestingTodoItem).toHaveClass('todo-item--completed');

    userEvent.click(reactTestingTodoItem);

    expect(loadingOverlay).toHaveClass('LoadingOverlay--isLoading');
    await waitFor(() => {
      expect(loadingOverlay).not.toHaveClass('LoadingOverlay--isLoading');
    });

    expect(reactTestingTodoItem).not.toHaveClass('todo-item--completed');
  });
});
