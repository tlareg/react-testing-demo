let NETWORK_DELAY = 150;

export const setNetworkDelay = delay => (NETWORK_DELAY = delay);

const initialItems = [
  { name: 'code Todo list logic', completed: true },
  { name: 'use Jest', completed: false },
  { name: 'use React Testing Library', completed: false },
  { name: 'use Cypress', completed: false },
];

let items = [];

export const resetItems = () => {
  items = initialItems.map(item => ({ ...item }));
};
resetItems();

export const fetchTodoList = () =>
  new Promise(resolve => setTimeout(() => resolve(items), NETWORK_DELAY));

export const toggleCompleted = name => {
  items = items.map(item =>
    item.name === name ? { ...item, completed: !item.completed } : item
  );

  return new Promise(resolve =>
    setTimeout(() => resolve(items), NETWORK_DELAY)
  );
};
