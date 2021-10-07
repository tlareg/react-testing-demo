const NETWORK_DELAY = 150;

let items = [
  { name: "code Todo list logic", completed: true },
  { name: "use Jest", completed: false },
  { name: "use React Testing Library", completed: false },
  { name: "use Cypress", completed: false },
];

export const fetchTodoList = () =>
  new Promise((resolve) => setTimeout(() => resolve(items), NETWORK_DELAY));

export const toggleCompleted = (name) => {
  items = items.map((item) =>
    item.name === name ? { ...item, completed: !item.completed } : item
  );

  return new Promise((resolve) =>
    setTimeout(() => resolve(items), NETWORK_DELAY)
  );
};
