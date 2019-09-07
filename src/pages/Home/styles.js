import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { BoldText, RegularText } from "~/styles/global";

import CustomGradient from "~/components/GradientBar/CustomGradient";

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

export const Subtitle = styled(RegularText)`
  color: #fff;
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Flow = styled.Image`
  height: 79px;
  width: 100%;
`;

export const TimerContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 154px;
  width: 375px;
  background-color: #1c1735;
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
  border-color: #e20473;
`;

export const Hours = styled(NumberBox)`
  border-color: #ac18e1;
`;

export const Minutes = styled(NumberBox)`
  border-color: #08aeea;
`;

export const Seconds = styled(NumberBox)`
  border-color: #2af598;
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
  height: 180px;
  margin-bottom: 25px;
`;

export const ScrollCarousel = styled.ScrollView``;

export const CarouselCard = styled.View`
  width: 200px;
  height: 150px;
  padding: 10px;
  background-color: #1c1735;
  border-radius: 8px;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselTitle = styled(BoldText)`
  text-align: center;
  font-size: 13px;
`;

export const CarouselSub = styled(RegularText)`
  text-align: center;
  font-size: 10px;
  opacity: 0.6;
`;

export const ContentContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const IconContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  width: 100px;
`;

export const CustomIcon = styled.Image.attrs({})`
  height: ${props => props.height};
  width: ${props => props.width};
`;

export const ContentGradient = styled(CustomGradient).attrs({
  height: 3,
  width: 100,
  marginTop: 5,
  marginBottom: 5
})``;

export const ContentCard = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  background-color: #1c1735;
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
`;

export const RowContent = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled(BoldText)`
  margin-top: 15px;
`;

export const ContentParagraph = styled(RegularText)`
  width: 95%;
  font-size: 12px;
  text-align: center;
`;

export const SponsorsContainer = styled.View`
  width: 100%;
  padding: 25px;
`;

export const DiamantRow = styled.View`
  width: 100%;
  height: 128px;
  border: 2px solid #81e3db;
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
  color: #fee140;
  width: 75px;
`;

export const GoldSquare = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border: 2px solid #fee140;
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
  color: #fff;
`;

export const SilverSquare = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 75px;
  height: 75px;
  border: 2px solid #fff;
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
  border: 2px solid #ff6700;
  border-radius: 8px;
`;

export const TicketContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TicketText = styled(BoldText)`
  font-size: 18px;
  color: #fff;
`;

export const TicketButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  border: 2px solid #2af598;
  border-radius: 50px;
`;

export const SubtitleDonations = styled(RegularText)`
  font-size: 14px;
  color: #ebebeb;
  text-align: center;
`;

export const Donationtext = styled(RegularText)`
  width: 90%;
  font-size: 13px;
  color: #fff;
  text-align: center;
  margin: 10px 0;
`;

export const BankInfoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  flex: 1;
  background-color: #1c1735;
  border-radius: 8px;
  padding: 10px 0;
`;

export const BankInfoRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  width: 90%;
`;

export const BankInfoText = styled(RegularText)`
  max-width: 90%;
  font-size: 13px;
  line-height: 16px;
`;

export const BankBoldText = styled(BoldText)``;
