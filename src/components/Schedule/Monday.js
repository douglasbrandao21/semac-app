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

import GreenToBlueGradientBar from "~/components/GradientBar/GreenToBlueGradientBar";

export default function Monday() {
  return (
    <Fragment>
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
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#2AF598">10:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Pitch, VPD e como vencer o Desafio Unicamp de Inovação e
            Empreendedorismo
          </LectureName>
          <LectureInfo>Auditório A • Prof. Carlos Gondo</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#2AF598">14:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Gamificação, programação e novas tendências profissionais: Você é um
            Gamer, um Cientista ou um Estudante?
          </LectureName>
          <LectureInfo>
            Auditório A • Profa. Dra. Luciene Cavalcanti
          </LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />
    </Fragment>
  );
}
