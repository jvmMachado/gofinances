import React, { useState } from 'react';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionButtons,
} from './styles';
import { CategorySelect } from '../../components/Form/CategorySelect';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionTypeSelection(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input 
            placeholder="Título"
          />
          <Input 
            placeholder="Valor"
          />

          <TransactionButtons>
            <TransactionTypeButton
              type='income'
              title='Income'
              isActive={transactionType === 'income'}
              onPress={() => handleTransactionTypeSelection('income')}
            />
            <TransactionTypeButton
              type='outcome'
              title='Outcome'
              isActive={transactionType === 'outcome'}
              onPress={() => handleTransactionTypeSelection('outcome')}
            />
          </TransactionButtons>

          <CategorySelect title={'Categoria'}/>
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
};