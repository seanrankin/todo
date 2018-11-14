import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from '../components/ToDo';
import { shallow } from 'enzyme';

describe('The ToDo Component', () => {
  let wrapper;

  const props = {
    complete: false,
    created: '2018-11-14T15:48:59.004Z',
    label: 'Do something remarkable today',
    handleToggleToDo: jest.fn(),
    handleDelete: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<ToDo {...props} />);
  });

  afterEach(() => {
    wrapper.setProps(props);
  });

  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should display the correct label', () => {
    expect(wrapper.find('.label').props().children).toBe(
      'Do something remarkable today'
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the correct due date', () => {
    expect(wrapper.find('.created').props().children).toBe(
      '11/14/2018, 3:48 PM'
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should display delete button', () => {
    expect(wrapper.find('.delete')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display incomplete by default', () => {
    expect(wrapper.find('.complete')).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should should display the completed style when complete', () => {
    wrapper.setProps({ complete: true });
    expect(wrapper.find('.complete')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should should handle the handleToggle callback', () => {
    const checkbox = wrapper.find('.checkbox');
    expect(checkbox.props().onClick).toHaveBeenCalledTimes(0);
    checkbox.simulate('click');
    expect(checkbox.props().onClick).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should should handle the handleDelete callback', () => {
    const deleteButton = wrapper.find('.delete');
    expect(deleteButton.props().onClick).toHaveBeenCalledTimes(0);
    deleteButton.simulate('click');
    expect(deleteButton.props().onClick).toHaveBeenCalledTimes(1);
    expect(wrapper).toMatchSnapshot();
  });
});
