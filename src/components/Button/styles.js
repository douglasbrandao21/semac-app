import styled from "styled-components/native";

import { RegularText } from "~/styles/global";

export const ButtonStyle = styled.TouchableOpacity`
  height: 31px;
  width: 148px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(RegularText)`
  font-size: 12px;
`;
