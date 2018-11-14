export const CREATE_TODO = 'CREATE_TODO';

export const createToDo = todo => ({
  type: CREATE_TODO,
  todo,
});
