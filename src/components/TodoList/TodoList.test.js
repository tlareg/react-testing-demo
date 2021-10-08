import React from "react";
import { render, screen } from "@testing-library/react";

import { TodoList } from "./TodoList";

describe("TodoList", () => {
  test("renders TodoList component", async () => {
    render(<TodoList />);

    const reactTestingTodoItem = await screen.findByText('use React Testing Library');
    expect(reactTestingTodoItem).toBeInTheDocument();

    screen.debug();
  });
});
