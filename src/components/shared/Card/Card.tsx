import type { ReactNode } from 'react';
import { CardWrapper } from './Card.styles';

interface CardProps {
  children?: ReactNode;
  backgroundColor?: string;
}

export const Card = ({ children, backgroundColor }: CardProps) => (
  <CardWrapper backgroundColor={backgroundColor}>{children}</CardWrapper>
);
