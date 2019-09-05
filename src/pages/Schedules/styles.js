import styled from "styled-components";

import { BoldText, RegularText } from "~/styles/global";

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  background-color: #151128;
  padding-bottom: 50px;
`;

export const Title = styled(BoldText)`
  font-size: 18px;
  margin-top: 20px;
`;

export const Separator = styled.View`
  height: 2px;
  background-color: rgba(255, 255, 255, 0.15);
  width: 95%;
  margin: 15px 0;
`;

export const ButtonsContainer = styled.View`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 27px;
  width: 52px;
  margin: 10px 5px;
`;

export const ButtonText = styled(RegularText)`
  line-height: 14px;
`;

export const ButtonActiveText = styled(BoldText)`
  line-height: 14px;
`;
