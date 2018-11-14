import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createToDo } from '../actions/todo';
import moment from 'moment';
import styles from './AddToDo.module.scss';

export class AddToDo extends Component {
  createToDo = event => {
    const { nextId } = this.props;
    event.preventDefault();
    const { createToDo } = this.props;
    createToDo({
      id: nextId,
      label: this.todo.value,
      complete: false,
      created: moment(new Date()).add(1, 'days'),
    });
    this.todo.value = '';
  };

  render() {
    return (
      <form>
        <input
          placeholder="What do you need to do?"
          ref={node => (this.todo = node)}
          className={styles.input}
        />
        <button
          type="submit"
          onClick={this.createToDo}
          style={{ visibility: 'hidden' }}
        />
      </form>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ todo: { todos } }) => {
  return {
    nextId: todos.length + 1,
  };
};

/* istanbul ignore next */
export default connect(
  mapStateToProps,
  { createToDo }
)(AddToDo);
