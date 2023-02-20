import { onsiteIqPurple } from 'constants/colors';
import styled from 'styled-components';

interface CardWrapperProps {
  backgroundColor?: string;
}

export const CardWrapper = styled.div<CardWrapperProps>`
  border-radius: 4px;
  border: 2px solid ${onsiteIqPurple};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#111111')};
  padding: 16px;
  width: 550px;
  display: flex;
  flex-direction: column;
  flex: 0 0 550px;
`;
