import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Icon,
  Title,
} from './styles';

const iconNames = {
  income: 'arrow-up-circle',
  outcome: 'arrow-down-circle',
}

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  type: 'income' | 'outcome';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({ type, title, ...rest }: TransactionTypeButtonProps) {
  return (
    <Container type={type} {...rest}>
        <Icon name={iconNames[type]} type={type}/>
        <Title>{title}</Title>
    </Container>
  );
};