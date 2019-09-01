import React from 'react';

import Navbar from '~/components/Navbar';

import GreenToBlueGradientBar from '~/components/GradientBar/GreenToBlueGradientBar';
import OrangeToRedGradientBar from '~/components/GradientBar/OrangeToRedGradientBar';

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
  ButtonsContainer,
  Button,
  ButtonText,
  Test
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
            <Hour color="#08AEEA">08:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Credenciamento</LectureName>
            <LectureInfo>Saguão</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#08AEEA">08:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Abertura</LectureName>
            <LectureInfo>Auditório A</LectureInfo>
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
            <Hour color="#08AEEA">10:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Pitch, VPD e como vencer o Desafio Unicamp de Inovação e Empreendedorismo</LectureName>
            <LectureInfo>Auditório A • Prof. Carlos Gondo</LectureInfo>
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
            <LectureName>Gamificação, programação e novas tendências profissionais: Você é um Gamer, um Cientista ou um Estudante?</LectureName>
            <LectureInfo>Auditório A • Profa. Dra. Luciene Cavalcanti</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
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
            <Hour color="#FF6700">08:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Credenciamento</LectureName>
            <LectureInfo>Saguão</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">08:40</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Abertura</LectureName>
            <LectureInfo>Auditório A</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />

        <ScheduleRow>
          <LeftSide>
            <Hour color="#FF6700">09:40</Hour>
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
            <Hour color="#FF6700">10:00</Hour>
          </LeftSide>

          <RightSide>
            <LectureName>Pitch, VPD e como vencer o Desafio Unicamp de Inovação e Empreendedorismo</LectureName>
            <LectureInfo>Auditório A • Prof. Carlos Gondo</LectureInfo>
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
            <LectureName>Gamificação, programação e novas tendências profissionais: Você é um Gamer, um Cientista ou um Estudante?</LectureName>
            <LectureInfo>Auditório A • Profa. Dra. Luciene Cavalcanti</LectureInfo>
            <Category>
              <Circle color="#08AEEA" />
              <CategoryText>Categoria do evento</CategoryText>
            </Category>
          </RightSide>

        </ScheduleRow>

        <Separator />
      </Tuesday>

      <Test />
    </Container>
  );
}
