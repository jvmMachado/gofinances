import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  padding: 18px 16px;

  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;
