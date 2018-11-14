import { CREATE_TODO, DESTROY_TODO, TOGGLE_TODO } from '../actions/todo';

export const initialState = {
  todos: [
    {
      id: 1,
      label: 'Start looking for a new job',
      complete: false,
      created: '2018-11-11T15:48:59.004Z',
    },
    {
      id: 2,
      label: 'Take the dog to the vet',
      complete: true,
      created: '2018-11-12T15:48:59.004Z',
    },
    {
      id: 3,
      label: 'Build Lego robot with Lily and Lucy',
      complete: false,
      created: '2018-11-13T15:48:59.004Z',
    },
    {
      id: 4,
      label: 'Plan the family holiday trip',
      complete: false,
      created: '2018-11-14T15:48:59.004Z',
    },
  ],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: toggleToDo(state.todos, action.id, action.complete),
      };
    case DESTROY_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export const toggleToDo = (todos, id, complete) => {
  return todos.map(item => {
    if (item.id !== id) {
      return item;
    }
    return {
      ...item,
      complete: !complete,
    };
  });
};
