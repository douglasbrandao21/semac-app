import styled from "styled-components/native";
import { BoldText, RegularText } from "~/styles/global";

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  background-color: #151128;
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

export const GoldSquare = styled.TouchableOpacity`
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

export const SilverRow = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const SponsorLabel = styled(RegularText)`
  font-size: 12px;
  color: #fff;
`;

export const SquarsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SilverSquare = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 75px;
  height: 75px;
  border: 2px solid #fff;
  border-radius: 8px;
`;

export const SupportContainer = styled.View`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SupportLabel = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  margin-left: 10px;
  font-size: 12px;
  margin-bottom: 2px;
`;

export const SupportRow = styled.View`
  height: 100%;
  display: flex;
`;

export const SupportSquare = styled.TouchableOpacity`
  height: 75px;
  width: 75px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const SupportLogo = styled.Image`
  height: ${props => props.height};
  width: ${props => props.width};
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
