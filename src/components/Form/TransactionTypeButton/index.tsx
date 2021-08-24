import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Button,
  Icon,
  Title,
} from './styles';

const iconNames = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
}

interface TransactionTypeButtonProps extends RectButtonProps {
  type: 'income' | 'outcome';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({ type, title, isActive, ...rest }: TransactionTypeButtonProps) {
  return (
    <Container 
      isActive={isActive}
      type={type}
    >
        <Button {...rest}>
          <Icon
            name={iconNames[type]}
            type={type}
          />
          <Title>{title}</Title>
        </Button>
    </Container>
  );
};