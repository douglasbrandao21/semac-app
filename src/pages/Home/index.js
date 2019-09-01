import React from 'react';

import Navbar from '~/components/Navbar';

import {
  Container,
  Title,
  Subtitle,
  Flow,
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
  SponsorsContainer,
  GoldRow,
  GoldLabel,
  GoldSquare,
  SilverRow,
  SponsorLabel,
  SquarsContainer,
  SilverSquare,
  SponsorLogo,
} from './styles';

import PinkToPurpleGradientBar from '~/components/GradientBar/PinkToPurpleGradientBar';
import GreenToBlueGradientBar from '~/components/GradientBar/GreenToBlueGradientBar';
import PinkToOrangeGradientBar from '~/components/GradientBar/PinkToOrangeGradientBar';

import logoNic from '~/assets/images/logo_nic.png';
import logoOpus from '~/assets/images/logo_opus.png';
import logoHit from '~/assets/images/logo_hit.png';
import logoPca from '~/assets/images/logo_pca.png';
import logoWdg from '~/assets/images/logo_wdg.png';

export default function Home() {
  return (
    <Container contentContainerStyle={{alignItems: 'center'}}>
      <Navbar />

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

      <Title>Patrocínios</Title>
      <PinkToOrangeGradientBar />

      <SponsorsContainer>

        <GoldRow>
          <GoldLabel>Gold</GoldLabel>
          <GoldSquare>
            <SponsorLogo source={logoNic} />
          </GoldSquare>
        </GoldRow>

        <SilverRow>
          <SponsorLabel>Prata</SponsorLabel>

          <SquarsContainer>
            <SilverSquare>
              <SponsorLogo source={logoOpus} />
            </SilverSquare>

            <SilverSquare>
              <SponsorLogo source={logoHit} />
            </SilverSquare>

            <SilverSquare>
              <SponsorLogo source={logoPca} />
            </SilverSquare>

            <SilverSquare>
              <SponsorLogo source={logoWdg} />
            </SilverSquare>
          </SquarsContainer>
        </SilverRow>
      </SponsorsContainer>
    </Container>
  );
}
