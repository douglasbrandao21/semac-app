import React from "react";

import Navbar from "~/components/Navbar";

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  ParagraphContainer,
  Paragraph
} from "./styles";

import OrangeToRedGradientBar from "~/components/GradientBar/OrangeToRedGradientBar";
import PinkToPurpleGradientBar from "~/components/GradientBar/PinkToPurpleGradientBar";

export default function Infos() {
  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <Navbar />

      <TitleContainer>
        <Title>Sobre</Title>
        <OrangeToRedGradientBar />
        <SubTitle>Mais informações sobre todo o evento</SubTitle>
      </TitleContainer>

      <ParagraphContainer>
        <Paragraph>
          A SEMAC, Semana da Computação é, tradicionalmente, um dos maiores
          eventos de tecnologia da região, organizado por alunos e professores
          do curso de Bacharelado em Ciência da Computação da UNESP
          (Universidade Estadual Paulista “Júlio de Mesquita Filho”) no Câmpus
          de São José do Rio Preto. O evento está em sua 29ª edição e ocorrerá
          entre os dias 30 de setembro e 4 de outubro de 2019.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          Anualmente o evento traz palestras e minicursos, sempre com temas
          diversificados e atualizados conforme os principais assuntos
          tecnológicos que transformam o mundo acadêmico e o mercado de
          trabalho. Tais atividades são ministradas por renomados doutores e
          outros grandes profissionais da área.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          Deve-se ainda agradecer aos órgãos de fomento, auxílio e apoio, bem
          como às universidades e os patrocinadores e doadores que foram
          imprescindíveis para a realização do evento.
        </Paragraph>
      </ParagraphContainer>

      <TitleContainer>
        <Title>Nossa história</Title>
        <PinkToPurpleGradientBar />
        <SubTitle>Há muito tempo fazendo a diferença</SubTitle>
      </TitleContainer>

      <ParagraphContainer>
        <Paragraph>
          O evento ocorre desde 1989, no IBILCE (Instituto de Biociências,
          Letras e Ciências Exatas) na UNESP de São José do Rio Preto, e está em
          sua 29ª edição. Em quase 30 anos de história, a SEMAC, além de
          pioneira na área, estabeleceu uma tradição no meio tecnológico e
          mostrou-se sempre em conformidade com os temas principais da
          computação no decorrer de suas edições.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          A década de 90 foi de extrema importância para o meio tecnológico em
          diversos aspectos: a criação do primeiro provedor de internet em 1989,
          a difusão do protocolo HTTP e o início da era “.com”, o avanço do
          paradigma de programação orientada a objetos, a disputa dos sistemas
          operacionais com a criação do sistema de código aberto Linux e a
          primeira animação longa metragem feita inteiramente em computadores.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          Inserida nesse contexto, a SEMAC discutiu temas como: aplicação da
          programação orientada a objetos em banco de dados, computação gráfica
          e processamento de imagens, além de trazer conteúdos sobre
          inteligência artificial e comércio online.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          Já na primeira década do milênio, o aumento do número de computadores
          pessoais bem como a criação dos primeiros telefones portáteis, o
          desenvolvimento de redes sem fio, e a fabricação de câmeras
          fotográficas de melhor qualidade marcaram a tecnologia.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          Novamente, a SEMAC trouxe palestras e minicursos abordando a
          computação móvel, programação concorrente, redes de computadores,
          processamento de imagens, engenharia de software, ensino a distância.
          Em 2002, inclusive, houve na SEMAC o Linux Install Fest, que visava
          difundir o sistema operacional nos computadores portáteis dos
          participantes.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          A partir de 2010, tecnologias como robótica, realidade virtual e
          aumentada, realidade misturada, ataques virtuais, a grande quantidade
          de dados presente nos sistemas computacionais, entre outros aspectos
          fazem parte do nosso cotidiano.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          Por isso, a SEMAC vem trazendo atividades com temas como: computação
          bioinspirada aplicada na robótica, ciência dos dados, programação
          forense e segurança digital, programação concorrente, processamento de
          imagens, códigos open-source, entre outros.
        </Paragraph>
      </ParagraphContainer>

      <ParagraphContainer>
        <Paragraph>
          Além das palestras e minicursos, a SEMAC também já contou com feira de
          recrutamento de funcionários por empresas da área em algumas de suas
          edições, e todo ano ocorre o campeonato de jogos para os
          participantes.
        </Paragraph>
      </ParagraphContainer>
    </Container>
  );
}
