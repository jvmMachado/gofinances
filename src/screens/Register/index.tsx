import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';

import { CategorySelection } from './../CategorySelection';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionButtons,
} from './styles';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionTypeSelection(type: 'income' | 'outcome') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelection 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
};