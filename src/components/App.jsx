import React, { useState } from 'react';
import Feedback from '../components/Feedback/Feedback';
import Statistics from '../components/Statistics/Statistics';
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
import Section from '../components/Section/Section';

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
  const positivePercentage = totalFeedback ? (good / totalFeedback) * 100 : 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default App;
