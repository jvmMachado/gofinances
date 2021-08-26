import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton,
} from './styles';

export interface TransactionsListDataProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const [transactions, setTransactions] = useState<TransactionsListDataProps[]>([]);


  async function loadTransactions() {
    const dataKey = '@gofinances:transactions';
    const response = await AsyncStorage.getItem(dataKey);

    const data = response ? JSON.parse(response) : [];

    const transactionsFormatted: TransactionsListDataProps[] = data
    .map((item: TransactionsListDataProps) => {
      const amount = Number(item.amount)
      .toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      });

      const date = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      }).format(new Date(item.date));

      return {
        ...item,
        amount,
        date,
      }
    });

    setTransactions(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();

  }, []);

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/26936266?v=4' }}/>
            <User>
              <UserGreeting style={{includeFontPadding: false}} >Olá,</UserGreeting>
              <UserName style={{includeFontPadding: false}}>João</UserName>
            </User>
          </UserInfo>

          <LogoutButton>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      
      <HighlightCards>
        <HighlightCard type="income" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 08 de agosto" />
        <HighlightCard type="outcome" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última saída dia 10 de agosto"/>
        <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 a 16 de agosto"/>
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};