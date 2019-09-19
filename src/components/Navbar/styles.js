import styled from "styled-components/native";

import { BoldText } from "~/styles/global";

export const LogoContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
  background-color: #0c0a17;
  border: 2px solid red;
`;

export const Logo = styled.Image`
  margin-left: 20px;
  height: 30px;
  width: 130px;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 10px;
  padding: 5px 15px;
  border: 1px solid #2af598;
  border-radius: 20px;
`;

export const ButtonText = styled(BoldText)`
  font-size: 12px;
`;
