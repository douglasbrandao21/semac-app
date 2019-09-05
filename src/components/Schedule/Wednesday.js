import React, { Fragment } from "react";

import {
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
  CategoryText
} from "./styles";

import BlueToBlackBlueGradient from "~/components/GradientBar/BlueToBlackBlueGradient";

export default function Wednesday() {
  return (
    <Fragment>
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
          <LectureName>
            Evolução do Processamento de Linguagem Natural com Machine Learning
          </LectureName>
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
          <LectureName>
            Aplicações da Inteligência Computacional na Robótica
          </LectureName>
          <LectureInfo>
            Auditório A • Prof. Dr. Eduardo do Valle Simões
          </LectureInfo>
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
    </Fragment>
  );
}
