import { ButtonWrapper } from './Button.styles';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'default';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
}

export const Button = ({ text, onClick, variant = 'default' }: ButtonProps) => (
  <ButtonWrapper type="button" onClick={onClick} variant={variant}>
    {text}
  </ButtonWrapper>
);
