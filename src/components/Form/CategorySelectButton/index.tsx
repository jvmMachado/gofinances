import React from 'react';

import {
  Container,
  Title,
  Icon,
} from './styles';

interface CategorySelectButtonProps {
  title: string;
}

export function CategorySelectButton({ title }: CategorySelectButtonProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name='chevron-down'/>
    </Container>
  );
};