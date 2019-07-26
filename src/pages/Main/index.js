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
  CarouselContainer,
  ScrollCarousel,
  CarouselCard,
  CarouselTitle,
  CarouselSub,
} from './styles';

import PinkToPurpleGradientBar from '~/components/GradientBar/PinkToPurpleGradientBar';
import GreenToBlueGradientBar from '~/components/GradientBar/GreenToBlueGradientBar';
import PinkToOrangeGradientBar from '~/components/GradientBar/PinkToOrangeGradientBar';

const Main = () => (
  <Container contentContainerStyle={{alignItems: 'center'}}>
    <LogoContainer>
      <Logo source={require('~/assets/images/entire_green.png')} />
    </LogoContainer>

    <Title>Sua passagem pro futuro!</Title>
    <PinkToPurpleGradientBar />
    <Subtitle>{'De 30 de Setembro a 4 de Outubro\nde 2019. Você não pode perder.'}</Subtitle>

    <Flow source={require('~/assets/images/flow.png')} />

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

    <CarouselContainer>
      <ScrollCarousel horizontal showsHorizontalScrollIndicator={false}>
        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>
      </ScrollCarousel>
    </CarouselContainer>

    <Title>Mini-Cursos em destaque</Title>
    <PinkToOrangeGradientBar />
    <CarouselContainer>
      <ScrollCarousel horizontal showsHorizontalScrollIndicator={false}>
        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>

        <CarouselCard>
          <CarouselTitle>Nome da palestra que vai acontecer</CarouselTitle>
          <CarouselSub>Prof. Dr. Anderson de Rezende Rocha</CarouselSub>
        </CarouselCard>
      </ScrollCarousel>
    </CarouselContainer>

  </Container>
);

export default Main;
