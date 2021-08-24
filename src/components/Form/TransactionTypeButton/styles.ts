import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface buttonProps {
  type: 'income' | 'outcome';
  isActive: boolean;
}

export const Container = styled.View<buttonProps>`
  width: 48%;

  

  
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ type, isActive }) => isActive && type ==='income' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
    border: none;
  `}

  ${({ type, isActive }) => isActive && type ==='outcome' && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
    border: none;
  `}
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px 35px;
`;


export const Icon = styled(Feather)<buttonProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ type, theme }) => type === 'income' ? theme.colors.success : theme.colors.attention};
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;