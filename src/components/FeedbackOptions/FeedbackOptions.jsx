import React from 'react';
import PropTypes from 'prop-types';
import {
  FeedbackButton,
  FeedbackList,
  FeedbackListItem,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => {
        return (
          <FeedbackListItem key={option}>
            <FeedbackButton onClick={onLeaveFeedback} option={option}>
              {option}
            </FeedbackButton>
          </FeedbackListItem>
        );
      })}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
