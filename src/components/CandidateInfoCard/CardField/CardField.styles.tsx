import styled from 'styled-components';

export const CardFieldWrapper = styled.div`
  display: flex;
  padding: 4px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #282828;
  }
`;

export const CardFieldLabel = styled.div`
  flex: 1;
  font-weight: 500;
`;

export const CardFieldContent = styled.div`
  flex: 1;
`;
