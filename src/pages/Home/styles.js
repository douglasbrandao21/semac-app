import styled from 'styled-components/native';
import { BoldText, RegularText } from '~/styles/global';


import FlexBox from '~/components/FlexBox';
import NormalText from '~/components/BoldText';

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
  margin-top: 50px;
`;

export const Subtitle = styled.Text`
  color: #FFF;
  text-align: center;
  font-size: 14px;
`;

export const Flow = styled.Image`
  height: 78px;
  width: 100%;
`;

export const TimerContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 154px;
  width: 375px;
  background-color: #1C1735;
  margin-top: 25px;
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

export const CarouselContainer = styled.View`
  height: 150px;
  margin-bottom: 25px;
`;

export const ScrollCarousel = styled.ScrollView`
`;

export const CarouselCard = styled.View`
  width: 150px;
  height: 128px;
  background-color: #1C1735;
  border-radius: 8px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CarouselTitle = styled(BoldText)`
  text-align: center;
  margin-top: 20px;
`;

export const CarouselSub = styled(RegularText)`
  text-align: center;
  font-size: 10px;
  opacity: 0.6;
  margin-bottom: 20px;
`;

export const SponsorsContainer = styled.View`
  width: 100%;
  padding: 25px;
`;

export const DiamantRow = styled.View`
  width: 100%;
  height: 128px;
  border: 2px solid #81E3DB;
  border-radius: 8px;
  margin-bottom: 15px;
`;

export const GoldRow = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const GoldLabel = styled(RegularText)`
  color: #FEE140;
  width: 75px;
`;

export const GoldSquare = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border: 2px solid #FEE140;
  border-radius: 8px;
`;

export const SponsorLogo = styled.Image`
  height: 80%;
  width: 80%;
`;

export const OpusLogo = styled.Image`
  height: 50px;
  width: 80px;
`;

export const SilverRow = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const SquarsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SponsorLabel = styled(RegularText)`
  font-size: 12px;
  color: #FFF;
`;

export const SilverSquare = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 75px;
  height: 75px;
  border: 2px solid #FFF;
  border-radius: 8px;
`;

export const BronzeRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const SmallSquare = styled.View`
  margin: 0 10px;
  width: 60px;
  height: 60px;
  border: 2px solid #FF6700;
  border-radius: 8px;
`;

export const TicketContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TicketText = styled(BoldText)`
  font-size: 18px;
  color: #FFF;
`;

export const TicketButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border: 2px solid #2AF598;
  border-radius: 50px;
`;
