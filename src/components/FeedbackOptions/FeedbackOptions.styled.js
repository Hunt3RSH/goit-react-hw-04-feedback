import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background: white;
  gap: 10px;
`;

export const FeedbackListItem = styled.li``;

export const FeedbackButton = styled.button`
  border: none;
  padding: 5px 20px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  :hover,
  :focus {
    background: #ffa680;
  }
`;
