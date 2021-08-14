import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface buttonProps {
  type: 'income' | 'outcome';
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<buttonProps>`
  width: 48%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px 35px;
  
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



export const Icon = styled(Feather)<buttonProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ type, theme }) => type === 'income' ? theme.colors.success : theme.colors.attention};
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;