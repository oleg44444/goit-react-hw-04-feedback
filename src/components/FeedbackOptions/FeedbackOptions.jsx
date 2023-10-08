import React from 'react';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={css.feedbackButton}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
