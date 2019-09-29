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

import PurpleToBlueGradient from "~/components/GradientBar/PurpleToBlueGradient";

export default function Friday() {
  return (
    <Fragment>
      <Date>
        <DateTitle>Sexta, 4 de Out</DateTitle>
        <PurpleToBlueGradient />
      </Date>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#AC18E1">08:30</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Transformação Digital: RPA integrado com Inteligência Artificial,
            Chatbot e URA
          </LectureName>
          <LectureInfo>Auditório A • Egmon Rethondin Sedano</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#AC18E1">09:40</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>Coffee Break</LectureName>
          <LectureInfo>Adunesp</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#AC18E1">10:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Utilização da ferramenta Simulink Hardware Support em robótica
          </LectureName>
          <LectureInfo>
            Auditório A • Prof. Dr. Luiz Antonio Bássora
          </LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#AC18E1">14:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Desenvolvimento de Robôs Autônomos para Jogar Futebol
          </LectureName>
          <LectureInfo>Auditório A • Prof. Dr. Marcos Máximo</LectureInfo>
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
        </RightSide>
      </ScheduleRow>

      <Separator />
    </Fragment>
  );
}
