import React from 'react';

import {
  Container,
  Title,
  Subtitle,
  Flow,
  Logo,
  LogoContainer,
  TimerContainer,
  Days,
  Hours,
  Minutes,
  Seconds,
  TimerNumber,
  BoxText,
  BoxesContainer,
  TextContainer,
  TimerText,
  TimerTextBold,
} from './styles';

import PinkToPurpleGradientBar from '~/components/GradientBar/PinkToPurpleGradientBar';
import GreenToBlueGradientBar from '~/components/GradientBar/GreenToBlueGradientBar';

import LectureCard from '~/components/LectureCard';

const Main = () => (
  <Container contentContainerStyle={{alignItems: 'center'}}>
    <LogoContainer>
      <Logo source={require('~/assets/images/entire_green.png')} />
    </LogoContainer>

    <Title>Sua passagem pro futuro!</Title>
    <PinkToPurpleGradientBar />
    <Subtitle>{'De 30 de Setembro a 4 de Outubro\nde 2019. Você não pode perder.'}</Subtitle>

    <Flow source={require('~/assets/images/flow2.png')}/>

    <TimerContainer>
      <TextContainer>
        <TimerText>Ainda </TimerText>
        <TimerTextBold>faltam</TimerTextBold>
      </TextContainer>

      <BoxesContainer>
        <Days>
          <TimerNumber>133</TimerNumber>
          <BoxText>DIAS</BoxText>
        </Days>

        <Hours>
          <TimerNumber>24</TimerNumber>
          <BoxText>HORAS</BoxText>
        </Hours>

        <Minutes>
          <TimerNumber>60</TimerNumber>
          <BoxText>MIN</BoxText>
        </Minutes>

        <Seconds>
          <TimerNumber>60</TimerNumber>
          <BoxText>SEG</BoxText>
        </Seconds>
      </BoxesContainer>

      <TextContainer>
        <TimerText>Para a </TimerText>
        <TimerTextBold>SEMAC 2019</TimerTextBold>
      </TextContainer>

    </TimerContainer>

    <Title>Palestras em destaque</Title>
    <GreenToBlueGradientBar />

    <LectureCard />
    <LectureCard />
    <LectureCard />
    <LectureCard />
    <LectureCard />
    <LectureCard />
    <LectureCard />

  </Container>
);

export default Main;
