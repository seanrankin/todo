import { CREATE_TODO } from '../actions/todo';

export const initialState = {
  todos: [
    { label: 'Go to the store' },
    { label: 'Pick up the kids' },
    { label: 'Eat well' },
    { label: 'Get plenty of sleep...' },
  ],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    default:
      return state;
  }
}
