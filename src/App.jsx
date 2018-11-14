import './App.scss';

import React, { Component } from 'react';
import { destroyToDo, toggleToDo } from './actions/todo';

import AddToDo from './components/AddToDo';
import PropTypes from 'prop-types';
import ToDo from './components/ToDo';
import { connect } from 'react-redux';
import styles from './App.module.scss';

export class App extends Component {
  render() {
    const { destroyToDo, toggleToDo, todos } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.list}>
          <div className={styles.header}>
            <div className={styles.title}>To Do List</div>
            <div className={styles.count}>
              {todos.filter(todo => !todo.complete).length}
            </div>
          </div>
          <div>
            {todos.map((todo, index) => (
              <ToDo
                key={index}
                complete={todo.complete}
                created={todo.created}
                label={todo.label}
                handleToggleToDo={toggleToDo.bind(null, todo.id, todo.complete)}
                handleDelete={destroyToDo.bind(null, todo.id)}
              />
            ))}
          </div>
          <AddToDo />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  destroyToDo: PropTypes.func.isRequired,
  toggleToDo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

/* istanbul ignore next */
const mapStateToProps = ({ todo: { todos } }) => {
  return {
    todos,
  };
};

/* istanbul ignore next */
export default connect(
  mapStateToProps,
  { toggleToDo, destroyToDo }
)(App);
