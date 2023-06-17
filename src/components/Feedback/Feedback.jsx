import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Feedback/Feedback.module.css';

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.stateContainer}>
      <h2>Please leave feedback</h2>
      <button className={styles.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={styles.button} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};

export default Feedback;
