import React from "react";

import { Linking, StyleSheet } from "react-native";

import Navbar from "~/components/Navbar";

import {
  Container,
  Title,
  Subtitle,
  Flow,
  CarouselContainer,
  ScrollCarousel,
  CarouselCard,
  CarouselTitle,
  CarouselSub,
  ContentContainer,
  ContentCard,
  IconContainer,
  CustomIcon,
  ContentTitle,
  ContentParagraph,
  SponsorsContainer,
  GoldRow,
  GoldLabel,
  GoldSquare,
  SponsorLogo,
  SilverRow,
  SponsorLabel,
  SquarsContainer,
  SilverSquare,
  SupportContainer,
  SupportLabel,
  SupportRow,
  SupportSquare,
  SupportLogo,
  SubtitleDonations,
  Donationtext,
  BankInfoContainer,
  BankInfoRow,
  BankInfoText,
  BankBoldText
} from "./styles";

import PinkToPurpleGradientBar from "~/components/GradientBar/PinkToPurpleGradientBar";
import GreenToBlueGradientBar from "~/components/GradientBar/GreenToBlueGradientBar";
import PinkToOrangeGradientBar from "~/components/GradientBar/PinkToOrangeGradientBar";
import PurpleToBlueGradient from "~/components/GradientBar/PurpleToBlueGradient";
import CustomGradient from "~/components/GradientBar/CustomGradient";

import Button from "~/components/Button";

import logoNic from "~/assets/images/logo_nic_branco.png";
import logoOpus from "~/assets/images/logo_opus.png";
import logoHit from "~/assets/images/logo_hit_branco.png";
import logoPca from "~/assets/images/logo_pca.png";
import logoWdg from "~/assets/images/logo_wdg.png";

import logoPoty from "~/assets/images/support/poty.png";
import logoHotBeach from "~/assets/images/support/hot_beach.png";
import blucherLogo from "~/assets/images/support/blucher.png";
import casaDoCodigoLogo from "~/assets/images/support/casa_do_codigo.png";

import CollegeIcon from "~/assets/icons/minicurso-icon-gradient.png";
import MicrophoneIcon from "~/assets/icons/palestra-gradient.png";
import ChampionshipIcon from "~/assets/icons/campeonato-gradient.png";
import CoffeIcon from "~/assets/icons/coffe-gradient.png";

export default function Home() {
  const lectures = [
    {
      name:
        "Pitch, VPD e como vencer o Desafio Unicamp de Inovação e Empreendedorismo",
      info: "Auditório A • Prof. Carlos Gondo",
      day: "30",
      month: "9",
      year: "2019",
      hour: "10:00",
      id: "1"
    },
    {
      name:
        "Gamificação, programação e novas tendências profissionais: Você é um Gamer, um Cientista ou um Estudante?",
      info: "Auditório A • Profa. Dra. Luciene Cavalcanti",
      day: "30",
      month: "9",
      year: "2019",
      hour: "14:00",
      id: "2"
    },
    {
      name: "Como tornar a IoT mais inteligente - abordagens e aplicações",
      info: "Auditório A • Prof. Dr. Jó Ueyama",
      day: "1",
      month: "10",
      year: "2019",
      hour: "10:00",
      id: "3"
    },
    {
      name: "Mesa redonda: 'Back-end da pesquisa: um goto para o sucesso'",
      info:
        "Auditório A • Prof. Me. Anderson Amorim • Me. Gabriel Covello • Prof. Me. Allan de Godoi Contessoto • Bruno Leal • Me. Guilherme Freire • José Carlos de Freitas",
      day: "1",
      month: "10",
      year: "2019",
      hour: "14:00",
      id: "4"
    },
    {
      name: "Mundo Hacker",
      info: "Auditório A • Felipe Guimarães Prado Souza",
      day: "1",
      month: "10",
      year: "2019",
      hour: "16:00",
      id: "5"
    },
    {
      name:
        "Evolução do Processamento de Linguagem Natural com Machine Learning",
      info: "Auditório A • Prof. Dr. Henrique Dezani",
      day: "2",
      month: "10",
      year: "2019",
      hour: "08:00",
      id: "6"
    },
    {
      name: "Aplicações da Inteligência Computacional na Robótica",
      info: "Auditório A • Prof. Dr. Eduardo do Valle Simões",
      day: "2",
      month: "10",
      year: "2019",
      hour: "10:00",
      id: "7"
    },
    {
      name: "Detecção de Ataques de Apresentação em Sistemas Biométricos.",
      info: "Auditório A • Prof. Dr. Aparecido Nilceu Marana",
      day: "3",
      month: "10",
      year: "2019",
      hour: "14:00",
      id: "8"
    },
    {
      name: "Entendendo Eventos do Mundo Real no Espaço e Tempo",
      info: "Auditório A • Prof. Dr. Anderson de Rezende Rocha",
      day: "3",
      month: "10",
      year: "2019",
      hour: "16:00",
      id: "9"
    },
    {
      name: "Palestra com título a ser confirmado",
      info: "Auditório A",
      day: "4",
      month: "10",
      year: "2019",
      hour: "10:00",
      id: "10"
    },
    {
      name: "Desenvolvimento de Robôs Autônomos para Jogar Futebol",
      info: "Auditório A • Prof. Dr. Marcos Máximo",
      day: "4",
      month: "10",
      year: "2019",
      hour: "14:00",
      id: "11"
    }
  ];

  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
      marginBottom: 10
    },
    gradientStyle: {
      height: 2,
      width: 100,
      marginTop: 10,
      marginBottom: 10
    },
    icons: {
      margin: 0
    }
  });

  function isAfter(lecture) {
    const lectureDate = new Date(
      `${lecture.month}/${lecture.day}/${lecture.year}`
    );
    const currentDate = new Date();

    return lectureDate > currentDate ? true : false;
  }

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <Navbar />

      <Title>Sua passagem pro futuro!</Title>
      <PinkToPurpleGradientBar />
      <Subtitle>
        {"De 30 de Setembro a 4 de Outubro\nde 2019. Você não pode perder."}
      </Subtitle>

      <Flow source={require("~/assets/images/flow.png")} />

      <Title>Próximas palestras</Title>
      <GreenToBlueGradientBar />

      <CarouselContainer>
        <ScrollCarousel horizontal showsHorizontalScrollIndicator={false}>
          {lectures.map(lecture =>
            isAfter(lecture) ? (
              <CarouselCard key={lecture.id}>
                <CarouselTitle>{lecture.name}</CarouselTitle>
                <CarouselSub>{lecture.info}</CarouselSub>
              </CarouselCard>
            ) : null
          )}
        </ScrollCarousel>
      </CarouselContainer>

      <Title>Mini-Cursos em destaque</Title>
      <PinkToOrangeGradientBar size="95%" />
      <CarouselContainer>
        <ScrollCarousel horizontal showsHorizontalScrollIndicator={false}>
          <CarouselCard>
            <CarouselTitle>Análise de sinais de áudio musical</CarouselTitle>
            <CarouselSub>
              Em breve mais conteúdo • Prof. Dr. Tiago Fernandes Tavares
            </CarouselSub>
          </CarouselCard>

          <CarouselCard>
            <CarouselTitle>
              Cronograma de Projetos: Cálculo do tempo de um projeto ...
            </CarouselTitle>
            <CarouselSub>
              Em breve mais conteúdo • Prof. Luiz Afonso Peccini
            </CarouselSub>
          </CarouselCard>

          <CarouselCard>
            <CarouselTitle>
              Introdução ao Processamento de Linguagem Natural com Python
            </CarouselTitle>
            <CarouselSub>
              Em breve mais conteúdo • Prof. Dr. Henrique Dezani
            </CarouselSub>
          </CarouselCard>

          <CarouselCard>
            <CarouselTitle>
              Desenvolvimento de APIs utilizando SpringBoot
            </CarouselTitle>
            <CarouselSub>Em breve mais conteúdo</CarouselSub>
          </CarouselCard>
        </ScrollCarousel>
      </CarouselContainer>

      <Title>Conteúdo</Title>
      <GreenToBlueGradientBar />

      <ContentContainer>
        <ContentCard>
          <IconContainer>
            <CustomIcon source={MicrophoneIcon} height="60px" width="40px" />
          </IconContainer>
          <ContentTitle>Palestras</ContentTitle>
          <CustomGradient
            height={2}
            width={250}
            marginTop={10}
            marginBottom={10}
            initialColor="#2AF598"
            finalColor="#2AF598"
          />
          <ContentParagraph>
            Aprofunde seus conhecimentos com assuntos atuais e relevantes
            apresentados por renomados profissionais e pesquisadores da área de
            computação.
          </ContentParagraph>
        </ContentCard>

        <ContentCard>
          <IconContainer>
            <CustomIcon source={CollegeIcon} height="40px" width="65px" />
          </IconContainer>
          <ContentTitle>Minicursos</ContentTitle>
          <CustomGradient
            height={2}
            width={250}
            marginTop={10}
            marginBottom={10}
            initialColor="#FF6700"
            finalColor="#E20473"
          />

          <ContentParagraph>
            Os minicursos oferecem a oportunidade de aprender novas técnicas e
            conhecer aplicações das tecnologias da área da computação de forma
            prática.
          </ContentParagraph>
        </ContentCard>

        <ContentCard>
          <IconContainer>
            <CustomIcon source={ChampionshipIcon} height="40px" width="80px" />
          </IconContainer>
          <ContentTitle>Campeonatos</ContentTitle>
          <CustomGradient
            height={2}
            width={250}
            marginTop={10}
            marginBottom={10}
            initialColor="#08AEEA"
            finalColor="#017EC1"
          />

          <ContentParagraph>
            Tornando o aprendizado da semana mais irreverente, o evento contará
            com o campeonato de jogos, com diversas categorias e estilos para
            escolher.
          </ContentParagraph>
        </ContentCard>

        <ContentCard>
          <IconContainer>
            <CustomIcon source={CoffeIcon} height="60px" width="60px" />
          </IconContainer>
          <ContentTitle>Coffee Break</ContentTitle>
          <CustomGradient
            height={2}
            width={250}
            marginTop={10}
            marginBottom={10}
            initialColor="#AC18E1"
            finalColor="#4330FC"
          />

          <ContentParagraph>
            As pausas entre as palestras oferecem a oportunidade do contato
            direto com os palestrantes, trocando experiências e aumentando o
            networking.
          </ContentParagraph>
        </ContentCard>
      </ContentContainer>
      <Title>Patrocínios</Title>
      <PinkToOrangeGradientBar />

      <SponsorsContainer>
        <GoldRow>
          <GoldLabel>Ouro</GoldLabel>
          <GoldSquare onPress={() => Linking.openURL("https://nic.br/")}>
            <SponsorLogo source={logoNic} />
          </GoldSquare>
        </GoldRow>

        <SilverRow>
          <SponsorLabel>Prata</SponsorLabel>

          <SquarsContainer>
            <SilverSquare
              onPress={() =>
                Linking.openURL("https://www.opus-software.com.br/")
              }
            >
              <SponsorLogo source={logoOpus} />
            </SilverSquare>

            <SilverSquare
              onPress={() => Linking.openURL("https://hit.com.vc/")}
            >
              <SponsorLogo source={logoHit} />
            </SilverSquare>

            <SilverSquare
              onPress={() => Linking.openURL("https://www.pca.com.br/site/")}
            >
              <SponsorLogo source={logoPca} />
            </SilverSquare>

            <SilverSquare
              onPress={() => Linking.openURL("https://www.wdgautomation.com/")}
            >
              <SponsorLogo source={logoWdg} />
            </SilverSquare>
          </SquarsContainer>
        </SilverRow>
      </SponsorsContainer>

      <SupportContainer>
        <SupportRow>
          <SupportLabel>Suporte</SupportLabel>
          <SquarsContainer>
            <SupportSquare
              onPress={() => Linking.openURL("http://www.bebidaspoty.com.br/")}
            >
              <SupportLogo
                source={logoPoty}
                height={40}
                width={59}
              ></SupportLogo>
            </SupportSquare>

            <SupportSquare
              onPress={() => Linking.openURL("https://www.blucher.com.br/")}
            >
              <SupportLogo
                source={blucherLogo}
                height={22}
                width={54}
              ></SupportLogo>
            </SupportSquare>

            <SupportSquare
              onPress={() => Linking.openURL("http://www.hotbeach.com.br/")}
            >
              <SupportLogo
                source={logoHotBeach}
                height={45}
                width={55}
              ></SupportLogo>
            </SupportSquare>

            <SupportSquare
              onPress={() => Linking.openURL("https://www.casadocodigo.com.br")}
            >
              <SupportLogo
                source={casaDoCodigoLogo}
                height={20}
                width={65}
              ></SupportLogo>
            </SupportSquare>
          </SquarsContainer>
        </SupportRow>
      </SupportContainer>

      <Title>Doações</Title>
      <PurpleToBlueGradient />

      <SubtitleDonations>
        Ajude a Semac a trazer o melhor com a sua doação.
      </SubtitleDonations>

      <Donationtext>
        Basta fazer um depósito ou uma transferência para os dados bancários
        abaixo:
      </Donationtext>

      <BankInfoContainer>
        <BankInfoRow>
          <BankInfoText>
            <BankBoldText>Razão social:</BankBoldText> Fundação de Apoio à
            Pesquisa e Extensão de São José do Rio Preto
          </BankInfoText>
        </BankInfoRow>

        <BankInfoRow>
          <BankInfoText>
            <BankBoldText>CNPJ: </BankBoldText>01.577.672/0001-27
          </BankInfoText>
        </BankInfoRow>

        <BankInfoRow>
          <BankInfoText>
            <BankBoldText>Banco: </BankBoldText>Banco Caixa Econômica Federal
          </BankInfoText>
        </BankInfoRow>

        <BankInfoRow>
          <BankInfoText>
            <BankBoldText>Agência: </BankBoldText>0631-9
          </BankInfoText>
        </BankInfoRow>

        <BankInfoRow>
          <BankInfoText>
            <BankBoldText>OP: </BankBoldText>003
          </BankInfoText>
        </BankInfoRow>

        <BankInfoRow>
          <BankInfoText>
            <BankBoldText>Conta corrente: </BankBoldText>00001746-4
          </BankInfoText>
        </BankInfoRow>
      </BankInfoContainer>

      <Button
        initialColor="#E10473"
        finalColor="#AC18E1"
        styles={styles.button}
        text="DOAR VIA PAYPAL"
        onPress={() => Linking.openURL("https://semac.cc/doacoes")}
      />
    </Container>
  );
}
