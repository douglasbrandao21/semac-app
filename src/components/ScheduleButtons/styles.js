import styled from "styled-components";

import { BoldText, RegularText } from "~/styles/global";

export const Button = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  height: 27px;
  width: 52px;
  margin: 10px 5px;
`;

export const ButtonActiveText = styled(BoldText)`
  line-height: 14px;
`;

export const ButtonText = styled(RegularText)`
  line-height: 14px;
`;
