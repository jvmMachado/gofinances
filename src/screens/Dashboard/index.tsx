import React from 'react';
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
} from './styles';

export interface TransactionsListDataProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const cardsData: TransactionsListDataProps[] = [
    {
    id: '1',
    type: 'income',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: { name: 'Freelas', icon: 'dollar-sign' },
    date: '05/08/2021',
    },
    {
      id: '2',
      type: 'outcome',
      title: 'Hamburgueria Vesúvio',
      amount: 'R$ 59,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '07/08/2021',
    },
    {
      id: '3',
      type: 'outcome',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      category: { name: 'Casa', icon: 'home' },
      date: '09/08/2021',
    },
  ];

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

          <Icon name="power" />
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
          data={cardsData}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};