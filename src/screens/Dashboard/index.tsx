import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

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
} from './styles';

export function Dashboard() {
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
    </Container>
  );
};