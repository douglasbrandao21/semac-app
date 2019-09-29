import React, { Fragment } from "react";

import OrangeToRedGradientBar from "~/components/GradientBar/OrangeToRedGradientBar";

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

export default function Tuesday() {
  return (
    <Fragment>
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
          <LectureName>
            Como tornar a IoT mais inteligente - abordagens e aplicações
          </LectureName>
          <LectureInfo>Auditório A • Prof. Dr. Jó Ueyama</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FF6700">14:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Mesa Redonda: "Back-end da pesquisa: um goto para o sucesso"
          </LectureName>
          <LectureInfo>
            Auditório A • Prof. Me. Anderson Amorim • Me. Gabriel Covello •
            Prof. Me. Allan de Godoi Contessoto • Bruno Leal • Me. Guilherme
            Freire • José Carlos de Freitas
          </LectureInfo>
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
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FF6700">19:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Minicurso: Análise de sinais de áudio musical
          </LectureName>
          <LectureInfo>Lab. 5 • Prof. Dr. Tiago Fernandes Tavares</LectureInfo>

          <Separator />

          <LectureName>
            Minicurso: Desenvolvimento de APIs utilizando SpringBoot
          </LectureName>
          <LectureInfo>LIM I • Luiz Roberto Freitas</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FF6700">20:40</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>Coffee Break</LectureName>
          <LectureInfo>Adunesp</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FF6700">21:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Minicurso: Análise de sinais de áudio musical
          </LectureName>
          <LectureInfo>Lab. 5 • Prof. Dr. Tiago Fernandes Tavares</LectureInfo>

          <Separator />

          <LectureName>
            Minicurso: Desenvolvimento de APIs utilizando SpringBoot
          </LectureName>
          <LectureInfo>LIM I • Luiz Roberto Freitas</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />
    </Fragment>
  );
}
