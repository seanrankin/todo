import './App.scss';

import React, { Component } from 'react';

import ToDo from './components/ToDo';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div>
        {todos.map(todo => (
          <ToDo label={todo.label} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ todo: { todos } }) => {
  return {
    todos,
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
