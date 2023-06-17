import styles from '../Feedback/Feedback.module.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ state: initialState }) => {
  const [state, setState] = useState(initialState);

  const handleClick = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
  };
  const totalFeedback = countTotalFeedback();


  const countPositiveFeedbackPercentage = () => {
    return 100 * (state.good / totalFeedback);
  };
  const positiveFeedback = countPositiveFeedbackPercentage();


  return (
    <div className={styles.stateContainer}>
      <h2>Please leave feedback</h2>
      <button className={styles.button} onClick={() => handleClick('good')}>
        Good
      </button>
      <button className={styles.button} onClick={() => handleClick('neutral')}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => handleClick('bad')}>
        Bad
      </button>
      
      <h2>Statistics</h2>
      <p>Good: {state.good}</p>
      <p>Neutral: {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {isNaN(positiveFeedback) ? 0 : positiveFeedback}%</p>
    </div>
  );
};

Feedback.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired
};

export default Feedback;
