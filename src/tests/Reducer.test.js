import { CREATE_TODO, DESTROY_TODO, TOGGLE_TODO } from '../actions/todo';
import reducer, { initialState, toggleToDo } from '../reducers/todo';

import { todo } from './mocks/todo';

describe('ToDo reducer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(initialState).toMatchSnapshot();
  });

  it('should handle CREATE_TODO', () => {
    const successAction = {
      type: CREATE_TODO,
      todo: todo,
    };

    expect(reducer(initialState, successAction)).toEqual({
      todos: [...initialState.todos, todo],
    });
  });

  it('should handle DESTROY_TODO', () => {
    const successAction = {
      type: DESTROY_TODO,
      id: 3,
    };

    expect(reducer(initialState, successAction)).toEqual({
      todos: [...initialState.todos.filter(todo => todo.id !== 3)],
    });
  });

  it('should handle TOGGLE_TODO', () => {
    const successAction = {
      type: TOGGLE_TODO,
      id: 5,
    };

    expect(reducer({ todos: [todo] }, successAction)).toEqual({
      todos: [
        {
          id: 5,
          label: 'Add this new todo',
          complete: true,
          created: '2018-11-17T15:48:59.004Z',
        },
      ],
    });
  });
});

describe('The toggleToDo reducer function', () => {
  it('should update the todos gracefully without mangling the order', () => {
    const toDoToMarkComplete = {
      id: 6,
      label: 'Add this new todo',
      complete: true,
      created: '2018-11-17T15:48:59.004Z',
    };
    expect(toggleToDo([todo, toDoToMarkComplete], 6, false)).toEqual([
      todo,
      {
        id: 6,
        label: 'Add this new todo',
        complete: true,
        created: '2018-11-17T15:48:59.004Z',
      },
    ]);
  });
});
