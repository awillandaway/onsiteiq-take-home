import type { ReactNode } from 'react';
import { CardFieldContent, CardFieldLabel, CardFieldWrapper } from './CardField.styles';

interface CardFieldProps {
  label: string;
  children: ReactNode;
}

export const CardField = ({ label, children }: CardFieldProps) => (
  <CardFieldWrapper>
    <CardFieldLabel>{label}</CardFieldLabel>
    <CardFieldContent>{children}</CardFieldContent>
  </CardFieldWrapper>
);
