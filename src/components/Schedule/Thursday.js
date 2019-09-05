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
            Em breve mais conteúdo • Prof. Luiz Afonso Peccini
          </LectureInfo>
          <Category>
            <Circle color="#FEE140" />
            <CategoryText>Categoria do evento</CategoryText>
          </Category>

          <Separator />

          <LectureName>
            Minicurso: Introdução ao Processamento de Linguagem Natural com
            Python
          </LectureName>
          <LectureInfo>
            Em breve mais conteúdo • Prof. Dr. Henrique Dezani
          </LectureInfo>
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
          <LectureName>
            Detecção de Ataques de Apresentação em Sistemas Biométricos
          </LectureName>
          <LectureInfo>
            Auditório A • Prof. Dr. Aparecido Nilceu Marana
          </LectureInfo>
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
          <LectureName>
            Entendendo Eventos do Mundo Real no Espaço e Tempo
          </LectureName>
          <LectureInfo>
            Auditório A • Prof. Dr. Anderson de Rezende Rocha
          </LectureInfo>
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
    </Fragment>
  );
}
