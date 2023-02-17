import type { ReactNode } from 'react';
import { CardWrapper } from './Card.styles';

interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => <CardWrapper>{children}</CardWrapper>;
