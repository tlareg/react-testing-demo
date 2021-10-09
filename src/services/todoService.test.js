import * as todoService from './todoService';

const setupTodoService = () => {
  todoService.setNetworkDelay(0);
  todoService.resetItems();
  return todoService;
};

describe('todoService', () => {
  describe('initially', () => {
    it('should have 4 items on todo list', async () => {
      expect.hasAssertions();
      const todoService = setupTodoService();
      const items = await todoService.fetchTodoList();
      expect(items).not.toHaveLength(5);
      expect(items).toHaveLength(4);
    });

    it("should have completed 'code Todo logic' item", async () => {
      expect.hasAssertions();
      const todoService = setupTodoService();
      const items = await todoService.fetchTodoList();
      const item = items.find(item => item.name === 'code Todo list logic');
      expect(item).toBeDefined();
      expect(item.completed).toBe(true);
    });

    it("should have NOT completed 'use Jest' item", async () => {
      expect.hasAssertions();
      const todoService = setupTodoService();
      const items = await todoService.fetchTodoList();
      const item = items.find(item => item.name === 'use Jest');
      expect(item).toBeDefined();
      expect(item.completed).toBe(false);
    });

    it("should have NOT completed 'use React Testing Library' item", async () => {
      expect.hasAssertions();
      const todoService = setupTodoService();
      const items = await todoService.fetchTodoList();
      const item = items.find(
        item => item.name === 'use React Testing Library'
      );
      expect(item).toBeDefined();
      expect(item.completed).toBe(false);
    });

    it("should have NOT completed 'use Cypress' item", async () => {
      expect.hasAssertions();
      const todoService = setupTodoService();
      const items = await todoService.fetchTodoList();
      const item = items.find(item => item.name === 'use Cypress');
      expect(item).toBeDefined();
      expect(item.completed).toBe(false);
    });
  });

  it("after toggling, 'use Jest item' should be completed", async () => {
    expect.hasAssertions();

    const todoService = setupTodoService();
    let items = await todoService.fetchTodoList();
    let item = items.find(item => item.name === 'use Jest');

    expect(item).toBeDefined();
    expect(item.completed).toBe(false);

    items = await todoService.toggleCompleted('use Jest');
    item = items.find(item => item.name === 'use Jest');

    expect(item.completed).toBe(true);
  });

  it("after toggling 2 times, 'use Jest item' should NOT be completed", async () => {
    expect.hasAssertions();

    const todoService = setupTodoService();
    let items = await todoService.fetchTodoList();
    let item = items.find(item => item.name === 'use Jest');

    expect(item).toBeDefined();
    expect(item.completed).toBe(false);

    items = await todoService.toggleCompleted('use Jest');
    item = items.find(item => item.name === 'use Jest');

    expect(item.completed).toBe(true);

    items = await todoService.toggleCompleted('use Jest');
    item = items.find(item => item.name === 'use Jest');

    expect(item.completed).toBe(false);
  });
});
