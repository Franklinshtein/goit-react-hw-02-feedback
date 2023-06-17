import React from 'react';
import Feedback from '../components/Feedback/Feedback';

export const App = () => {
  const state = { good: 0, neutral: 0, bad: 0 };

  return (
    <div>
      <Feedback state={state} />
      {/* <Statistic good={state.good} neutral={state.neutral} bad={state.bad} total={} positivePercentage={} /> */}
    </div>
  );
};