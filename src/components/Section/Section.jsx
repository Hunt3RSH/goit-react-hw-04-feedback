import React from 'react';
import PropTypes from 'prop-types';
import { SectionMain, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionMain>
    <Title>{title}</Title>
    {children}
  </SectionMain>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
