import { App } from '../App';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { todos } from './mocks/todos';

describe('The App Component', () => {
  let wrapper;

  const props = {
    destroyToDo: () => {},
    toggleToDo: () => {},
    todos: [],
  };

  beforeEach(() => {
    wrapper = shallow(<App {...props} />);
  });

  afterEach(() => {
    wrapper.setProps(props);
  });

  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should match the snapshot with some seed props', () => {
    wrapper.setProps({ todos: todos });
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the app title', () => {
    wrapper.setProps({ todos: todos });
    expect(wrapper.find('.title').props().children).toBe('To Do List');
    expect(wrapper).toMatchSnapshot();
  });

  it('should display a count of incomplete todos', () => {
    wrapper.setProps({ todos: todos });
    expect(wrapper.find('.count').props().children).toEqual(3);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display a list of todos', () => {
    wrapper.setProps({ todos: todos });
    expect(wrapper.find('.root')).toHaveLength(1);
    expect(wrapper.find('.list')).toHaveLength(1);
    expect(wrapper.find('ToDo')).toHaveLength(4);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the add todo component', () => {
    wrapper.setProps({ todos: todos });
    expect(wrapper.find('Connect(AddToDo)')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
