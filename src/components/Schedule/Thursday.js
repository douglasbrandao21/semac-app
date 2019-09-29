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

import YellowToOrangeGradient from "~/components/GradientBar/YellowToOrangeGradient";

export default function Thursday() {
  return (
    <Fragment>
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
          <LectureName>
            Minicurso: "Cronograma de Projetos: Cálculo do tempo de um projeto
            utilizando os diagramas CPM, Rede, AoA e AoN"
          </LectureName>
          <LectureInfo>
            Laboratório de Robótica • Prof. Luiz Afonso Peccini
          </LectureInfo>

          <Separator />

          <LectureName>
            Minicurso: Introdução ao Processamento de Linguagem Natural com
            Python
          </LectureName>
          <LectureInfo>LIM I • Prof. Dr. Henrique Dezani</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FEE140">09:40</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>Coffee Break</LectureName>
          <LectureInfo>Adunesp</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FEE140">10:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Minicurso: "Cronograma de Projetos: Cálculo do tempo de um projeto
            utilizando os diagramas CPM, Rede, AoA e AoN"
          </LectureName>
          <LectureInfo>
            Laboratório de Robótica • Prof. Luiz Afonso Peccini
          </LectureInfo>

          <Separator />

          <LectureName>
            Minicurso: Introdução ao Processamento de Linguagem Natural com
            Python
          </LectureName>
          <LectureInfo>LIM I • Prof. Dr. Henrique Dezani</LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FEE140">14:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            Detecção de Ataques de Apresentação em Sistemas Biométricos
          </LectureName>
          <LectureInfo>
            Auditório A • Prof. Dr. Aparecido Nilceu Marana
          </LectureInfo>
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
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FEE140">16:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>
            A verdade por detrás da história: Revelando fake news em massa e
            redes sociais
          </LectureName>
          <LectureInfo>
            Auditório A • Prof. Dr. Anderson de Rezende Rocha
          </LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />

      <ScheduleRow>
        <LeftSide>
          <Hour color="#FEE140">19:00</Hour>
        </LeftSide>

        <RightSide>
          <LectureName>Noite de Jogos</LectureName>
          <LectureInfo>
            Auditório C - Consoles • Lab 5 - League of Legends
          </LectureInfo>
        </RightSide>
      </ScheduleRow>

      <Separator />
    </Fragment>
  );
}
