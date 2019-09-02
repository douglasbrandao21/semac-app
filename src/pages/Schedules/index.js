import React from 'react';

import Navbar from '~/components/Navbar';

import GreenToBlueGradientBar from '~/components/GradientBar/GreenToBlueGradientBar';
import OrangeToRedGradientBar from '~/components/GradientBar/OrangeToRedGradientBar';
import BlueToBlackBlueGradient from '~/components/GradientBar/BlueToBlackBlueGradient';
import YellowToOrangeGradient from '~/components/GradientBar/YellowToOrangeGradient';
import PurpleToBlueGradient from '~/components/GradientBar/PurpleToBlueGradient';

import {
  Container,
  Title,
  Date,
  DateTitle,
  Separator,
  ScheduleRow,
  LeftSide,
  Hour,
  RightSide,
  LectureName,
  LectureInfo,
  Category,
  Circle,
  CategoryText,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  ButtonsContainer,
  Button,
  ButtonText,
  Test,
  Friday,
} from './styles';

export default function Schedules() {
  return (
    <Container contentContainerStyle={{alignItems: 'center'}}>
      <Navbar />

      <Title>Programação do dia</Title>

      <ButtonsContainer>
        <Button>
          <ButtonText>seg</ButtonText>
        </Button>

        <Button>
          <ButtonText>ter</ButtonText>
        </Button>

        <Button>
          <ButtonText>qua</ButtonText>
        </Button>

        <Button>
          <ButtonText>qui</ButtonText>
        </Button>

        <Button>
          <ButtonText>sex</ButtonText>
        </Button>
      </ButtonsContainer>

      <Monday>
        <Date>
          <DateTitle>Segunda, 30 set</DateTitle>
          <GreenToBlueGradientBar />
        </Date>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#2AF598">08:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Credenciamento</LectureName>
            <LectureInfo>Saguão</LectureInfo>
            <Category>
              <Circle color="#2AF598" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#2AF598">08:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Abertura</LectureName>
            <LectureInfo>Auditório A</LectureInfo>
            <Category>
              <Circle color="#2AF598" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#2AF598">09:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Coffe Break</LectureName>
            <LectureInfo>Adunesp</LectureInfo>
            <Category>
              <Circle color="#2AF598" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#2AF598">10:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Pitch, VPD e como vencer o Desafio Unicamp de Inovação e Empreendedorismo</LectureName>
            <LectureInfo>Auditório A • Prof. Carlos Gondo</LectureInfo>
            <Category>
              <Circle color="#2AF598" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#2AF598">14:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Gamificação, programação e novas tendências profissionais: Você é um Gamer, um Cientista ou um Estudante?</LectureName>
            <LectureInfo>Auditório A • Profa. Dra. Luciene Cavalcanti</LectureInfo>
            <Category>
              <Circle color="#2AF598" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />
      </Monday>

      <Tuesday>
        <Date>
          <DateTitle>Terça, 1 de Out</DateTitle>
          <OrangeToRedGradientBar />
        </Date>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">10:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Como tornar a IoT mais inteligente - abordagens e aplicações</LectureName>
            <LectureInfo>Auditório A • Prof. Dr. Jó Ueyama</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">14:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Mesa Redonda: "Back-end da pesquisa: um goto para o sucesso"</LectureName>
            <LectureInfo>Auditório A • Prof. Me. Anderson Amorim • Me. Gabriel Covello • Prof. Me. Allan de Godoi Contessoto • Bruno Leal • Me. Guilherme Freire • José Carlos de Freitas</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">15:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Coffe Break</LectureName>
            <LectureInfo>Adunesp</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">16:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Mundo Hacker</LectureName>
            <LectureInfo>Auditório A • Felipe Guimarães Prado Souza</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">19:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Minicurso: Análise de sinais de áudio musical</LectureName>
            <LectureInfo>Em breve mais conteúdo • Prof. Dr. Tiago Fernandes Tavares</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>

            <Separator />

            <LectureName>Minicurso: Desenvolvimento de APIs utilizando SpringBoot</LectureName>
            <LectureInfo>Em breve mais conteúdo</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">21:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Coffee Break</LectureName>
            <LectureInfo>Adunesp</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>
      </Tuesday>

      <Wednesday>
        <Date>
          <DateTitle>Quarta, 2 de Out</DateTitle>
          <BlueToBlackBlueGradient />
        </Date>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#08AEEA">08:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Evolução do Processamento de Linguagem Natural com Machine Learning</LectureName>
            <LectureInfo>Auditório A • Prof. Dr. Henrique Dezani</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#08AEEA">09:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Coffee Break</LectureName>
            <LectureInfo>Adunesp</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#08AEEA">10:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Aplicações da Inteligência Computacional na Robótica</LectureName>
            <LectureInfo>Auditório A • Prof. Dr. Eduardo do Valle Simões</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#08AEEA">14:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Maratona de Programação</LectureName>
            <LectureInfo>Em breve mais conteúdo</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />
      </Wednesday>

      <Thursday>
        <Date>
          <DateTitle>Quinta, 3 de Out</DateTitle>
          <YellowToOrangeGradient />
        </Date>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FEE140">08:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Minicurso: "Cronograma de Projetos: Cálculo do tempo de um projeto utilizando os diagramas CPM, Rede, AoA e AoN"</LectureName>
            <LectureInfo>Em breve mais conteúdo • Prof. Luiz Afonso Peccini</LectureInfo>
            <Category>
              <Circle color="#FEE140" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>

            <Separator />

            <LectureName>Minicurso: Introdução ao Processamento de Linguagem Natural com Python</LectureName>
            <LectureInfo>Em breve mais conteúdo • Prof. Dr. Henrique Dezani</LectureInfo>
            <Category>
              <Circle color="#FEE140" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FEE140">09:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Coffee Break</LectureName>
            <LectureInfo>Coffee Break</LectureInfo>
            <Category>
              <Circle color="#FEE140" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FEE140">14:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Detecção de Ataques de Apresentação em Sistemas Biométricos</LectureName>
            <LectureInfo>Auditório A • Prof. Dr. Aparecido Nilceu Marana</LectureInfo>
            <Category>
              <Circle color="#FEE140" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FEE140">15:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Coffee Break</LectureName>
            <LectureInfo>Adunesp</LectureInfo>
            <Category>
              <Circle color="#FEE140" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FEE140">16:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Entendendo Eventos do Mundo Real no Espaço e Tempo</LectureName>
            <LectureInfo>Auditório A • Prof. Dr. Anderson de Rezende Rocha</LectureInfo>
            <Category>
              <Circle color="#FEE140" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FEE140">19:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Noite de Jogos</LectureName>
            <LectureInfo>Em breve mais conteúdo</LectureInfo>
            <Category>
              <Circle color="#FEE140" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />
      </Thursday>

      <Friday>
        <Date>
          <DateTitle>Sexta, 4 de Out</DateTitle>
          <PurpleToBlueGradient />
        </Date>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#AC18E1">10:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Palestra com título a ser confirmado</LectureName>
            <LectureInfo>Auditório A</LectureInfo>
            <Category>
              <Circle color="#AC18E1" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#AC18E1">14:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Desenvolvimento de Robôs Autônomos para Jogar Futebol</LectureName>
            <LectureInfo>Auditório A • Prof. Dr. Marcos Máximo</LectureInfo>
            <Category>
              <Circle color="#AC18E1" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#AC18E1">15:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Coffe Break</LectureName>
            <LectureInfo>Adunesp</LectureInfo>
            <Category>
              <Circle color="#AC18E1" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#AC18E1">16:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Encerramento</LectureName>
            <LectureInfo>Auditório A</LectureInfo>
            <Category>
              <Circle color="#AC18E1" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>
      </Friday>
    </Container>
  );
}
