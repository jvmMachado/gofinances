import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface cardProps {
  type: 'income' | 'outcome' | 'total';
}

export const Container = styled.View<cardProps>`
  background-color: ${({ type, theme }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<cardProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ type, theme }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

const iconColor = {
  income: theme.colors.success,
  outcome: theme.colors.attention,
  total: theme.colors.shape,
}

export const Icon = styled(Feather)<cardProps>`
  font-size: ${RFValue(40)}px;
  color: ${({ type }) => iconColor[type]};
`;

export const Content = styled.View`

`;

export const Amount = styled.Text<cardProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ type, theme }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};

  margin-top: 38px;
`;

export const LastTransaction = styled.Text<cardProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  
  color: ${({ type, theme }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;