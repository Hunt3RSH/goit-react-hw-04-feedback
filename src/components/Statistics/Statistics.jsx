import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <StatisticsListItem>Good:{good}</StatisticsListItem>
    <StatisticsListItem>Neutral:{neutral}</StatisticsListItem>
    <StatisticsListItem>Bad:{bad}</StatisticsListItem>
    <StatisticsListItem>Total:{total}</StatisticsListItem>
    <StatisticsListItem>
      Positive feedback:{positivePercentage}%
    </StatisticsListItem>
  </StatisticsList>
);

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
