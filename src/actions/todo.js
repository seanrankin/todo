export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DESTROY_TODO = 'DESTROY_TODO';

export const createToDo = todo => ({
  type: CREATE_TODO,
  todo,
});

export const toggleToDo = (id, complete) => ({
  type: TOGGLE_TODO,
  id,
  complete,
});

export const destroyToDo = id => ({
  type: DESTROY_TODO,
  id,
});
