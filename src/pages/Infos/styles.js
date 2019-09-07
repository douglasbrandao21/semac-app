import styled from "styled-components/native";

import { BoldText, RegularText } from "~/styles/global";

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  max-width: 100%;
  background-color: #151128;
`;

export const TitleContainer = styled.View`
  display: flex;
  width: 90%;
`;

export const Title = styled(BoldText)`
  font-size: 22px;
  margin-top: 50px;
`;

export const SubTitle = styled(RegularText)`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`;

export const ParagraphContainer = styled.View`
  width: 90%;
`;

export const Paragraph = styled(RegularText)`
  margin: 10px 0;
  line-height: 18px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
`;
