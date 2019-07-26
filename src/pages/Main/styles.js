import styled from 'styled-components/native';
import { BoldText, RegularText } from '~/styles/global';

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  background-color: #151128;
`;

export const LogoContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

export const Logo = styled.Image`
  height: 50px;
  width: 170px;
`;

export const Title = styled(BoldText)`
  font-size: 22px;
`;

export const Subtitle = styled.Text`
  color: #FFF;
  text-align: center;
  font-size: 14px;
`;

export const Flow = styled.Image`
  height: 8%;
  width: 150%;
`;

export const TimerContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 154px;
  width: 375px;
  background-color: #1C1735;
  top: -25px;
  margin-bottom: 25px;
`;

export const BoxesContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NumberBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  margin: 0 10px;
  border-radius: 8px;
  border: 2px solid;
`;

export const Days = styled(NumberBox)`
  border-color: #E20473;
`;

export const Hours = styled(NumberBox)`
  border-color: #AC18E1;
`;

export const Minutes = styled(NumberBox)`
  border-color: #08AEEA;
`;

export const Seconds = styled(NumberBox)`
  border-color: #2AF598;
`;

export const TimerNumber = styled(BoldText)`
  font-size: 22px;
`;

export const BoxText = styled(RegularText)`
  font-size: 10px;
`;

export const TextContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 15px;
`;

export const TimerText = styled(RegularText)`
  font-size: 14px;
`;

export const TimerTextBold = styled(BoldText)`
  font-size: 14px;
  font-weight: bold;
`;
