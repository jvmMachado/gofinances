import React from 'react';

import {
  Container,
  Title,
  Icon,
} from './styles';

interface CategorySelectProps {
  title: string;
}

export function CategorySelect({ title }: CategorySelectProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Icon name='chevron-down'/>
    </Container>
  );
};