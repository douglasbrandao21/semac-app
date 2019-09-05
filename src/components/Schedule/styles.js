import styled from 'styled-components';

import { BoldText, RegularText } from '~/styles/global';

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  background-color: #151128;
`;

export const Title = styled(BoldText)`
  font-size: 18px;
  margin-top: 20px;
`;

export const Date = styled.View`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DateTitle = styled(BoldText)`
  font-size: 18px;
`;

export const Separator = styled.View`
  height: 2px;
  background-color: rgba(255,255,255, 0.15);
  width: 95%;
  margin: 15px 0;
`;

export const ScheduleRow = styled.View`
  max-width: 100%;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  flex-direction: row;
`;

export const LeftSide = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const Hour = styled(RegularText)`
  font-size: 18px;
  color: ${props => props.color};
`;

export const RightSide = styled.View`
  display: flex;
  width: 85%;
  padding-left: 8px;
`;

export const LectureName = styled(BoldText)`
  font-size: 16px;
  color: #FFF;
`;

export const LectureInfo = styled(RegularText)`
  font-size: 16px;
  color: rgba(255,255,255,0.6);
`;

export const Category = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3px;
`;

export const Circle = styled.View`
  width: 8px;
  height: 8px;
  background-color: ${props => props.color};
  border-radius: 500px;
`;

export const CategoryText = styled(RegularText)`
  margin-left: 5px;
  font-size: 12px;
  color: rgba(255,255,255,0.6);
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

export const ButtonText = styled(RegularText)``;

export const Monday = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tuesday = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wednesday = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Thursday = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Friday = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Test = styled.View`
  height: 250px;
`;
