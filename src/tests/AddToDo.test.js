import { AddToDo } from '../components/AddToDo';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

describe('The AddToDo Component', () => {
  let wrapper;

  const props = {
    createToDo: () => {},
  };

  beforeEach(() => {
    wrapper = mount(<AddToDo {...props} />);
  });

  afterEach(() => {
    wrapper.setProps(props);
  });

  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should display the input box', () => {
    expect(wrapper.find('.input')).toHaveLength(1);
  });

  it('should fire the createToDo component method when called', () => {
    const instance = wrapper.instance();
    jest.spyOn(instance, 'createToDo');
    instance.createToDo({
      preventDefault: () => {},
    });
    expect(instance.createToDo).toHaveBeenCalled();
  });
});
