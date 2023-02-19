import { ButtonWrapper } from 'components/shared/Button/Button.styles';
import { onsiteIqPurple } from 'constants/colors';
import styled, { css } from 'styled-components';

export const CandidateInfoCardWrapper = styled.div``;

export const PhotoAndName = styled.div`
  display: flex;
`;

export const Name = styled.div`
  font-size: 32px;
`;

export const Status = styled.div`
  font-size: 20px;
`;

export const NameAndStatus = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const SectionHeader = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  margin: 24px 0 12px;
  padding: 0 4px;
`;

export const NotesTextArea = styled.textarea`
  ${(props) =>
    props.disabled &&
    css`
      color: white;
    `}
  margin-top: 8px;
  resize: none;
  height: 6rem;
  outline: none;
  border-radius: 2px;
  &:focus {
    box-shadow: 0px 0px 0 2px ${onsiteIqPurple};
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  margin-top: 8px;

  ${ButtonWrapper} {
    flex: 1;
    &:not(:last-of-type) {
      margin-right: 8px;
    }
  }
`;
