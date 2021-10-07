import * as todoService from "./todoService";

beforeEach(() => {
  todoService.resetItems();
});

describe("todoService", () => {
  describe("initially", () => {
    test("should have 4 items on todo list", async () => {
      const items = await todoService.fetchTodoList();
      expect(items.length).not.toBe(5);
      expect(items.length).toBe(4);
    });

    test("'code Todo logic' item should be completed", async () => {
      const items = await todoService.fetchTodoList();
      const item = items.find((item) => item.name === "code Todo list logic");
      expect(item).toBeDefined();
      expect(item.completed).toBe(true);
    });

    test("'use Jest' item should NOT be completed", async () => {
      const items = await todoService.fetchTodoList();
      const item = items.find((item) => item.name === "use Jest");
      expect(item).toBeDefined();
      expect(item.completed).toBe(false);
    });

    test("'use React Testing Library' should NOT be completed", async () => {
      const items = await todoService.fetchTodoList();
      const item = items.find(
        (item) => item.name === "use React Testing Library"
      );
      expect(item).toBeDefined();
      expect(item.completed).toBe(false);
    });

    test("'use Cypress' should NOT be completed", async () => {
      const items = await todoService.fetchTodoList();
      const item = items.find((item) => item.name === "use Cypress");
      expect(item).toBeDefined();
      expect(item.completed).toBe(false);
    });
  });

  test("after toggling, 'use Jest item' should be completed", async () => {
    let items = await todoService.fetchTodoList();
    let item = items.find((item) => item.name === "use Jest");

    expect(item).toBeDefined();
    expect(item.completed).toBe(false);

    items = await todoService.toggleCompleted("use Jest");
    item = items.find((item) => item.name === "use Jest");

    expect(item.completed).toBe(true);
  });

  test("after toggling 2 times, 'use Jest item' should NOT be completed", async () => {
    let items = await todoService.fetchTodoList();
    let item = items.find((item) => item.name === "use Jest");

    expect(item).toBeDefined();
    expect(item.completed).toBe(false);

    items = await todoService.toggleCompleted("use Jest");
    item = items.find((item) => item.name === "use Jest");

    expect(item.completed).toBe(true);

    items = await todoService.toggleCompleted("use Jest");
    item = items.find((item) => item.name === "use Jest");

    expect(item.completed).toBe(false);
  });
});
