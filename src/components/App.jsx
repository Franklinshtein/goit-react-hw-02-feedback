import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from '../components/Notification/Notification';

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  const { good, neutral, bad } = state;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback ? ((good / totalFeedback) * 100).toFixed(2) : 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
