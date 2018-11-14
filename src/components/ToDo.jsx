import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import styles from './ToDo.module.scss';

const ToDo = ({ complete, created, label, handleToggleToDo, handleDelete }) => {
  return (
    <div
      className={classNames(styles.root, {
        [styles.complete]: complete,
      })}
    >
      <div className={styles.form}>
        <input
          className={styles.checkbox}
          type="checkbox"
          onClick={handleToggleToDo}
          defaultChecked={complete}
        />
      </div>
      <div className={styles.item}>
        <span className={styles.label}>{label}</span>
        <br />
        <span className={styles.created}>
          {moment.parseZone(created).format('MM/DD/YYYY, h:mm A')}
        </span>
        <hr className={styles.hr} />
      </div>
      <div className={styles.delete} onClick={handleDelete}>
        ✕
      </div>
    </div>
  );
};

ToDo.propTypes = {
  complete: PropTypes.bool.isRequired,
  created: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleToggleToDo: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ToDo;
