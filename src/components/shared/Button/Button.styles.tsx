/* eslint-disable import/no-extraneous-dependencies */
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { onsiteIqPurple } from 'constants/colors';
import type { ButtonVariant } from './Button';

interface ButtonWrapperProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const primaryColor = '#185818';
const dangerColor = '#851e1e';

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  min-height: 40px;
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 16px;
  padding: 4px 12px;

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          background-color: ${primaryColor};
          &:hover {
            background-color: ${lighten(0.05, primaryColor)};
          }
        `;
      case 'danger':
        return css`
          background-color: ${dangerColor};
          &:hover {
            background-color: ${lighten(0.05, dangerColor)};
          }
        `;
      case 'secondary':
      default:
        return css`
          background-color: ${onsiteIqPurple};
          &:hover {
            background-color: ${lighten(0.05, onsiteIqPurple)};
          }
        `;
    }
  }};
`;
