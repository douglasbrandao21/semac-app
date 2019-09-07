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
          <Hour color="#AC18E1">10:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>Palestra com título a ser confirmado</LectureName>
          <LectureInfo>Auditório A</LectureInfo>
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
