import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import * as Animatable from "react-native-animatable";

import Navbar from "~/components/Navbar";

import {
  Container,
  HeaderContainer,
  HeaderSeparator,
  Title,
  ButtonsContainer,
  Button,
  ButtonActiveText,
  ButtonText
} from "./styles";

import LinearGradient from "react-native-linear-gradient";

import Monday from "~/components/Schedule/Monday";
import Tuesday from "~/components/Schedule/Tuesday";
import Wednesday from "~/components/Schedule/Wednesday";
import Thursday from "~/components/Schedule/Thursday";
import Friday from "~/components/Schedule/Friday";

export default function Schedules() {
  const [active, setActive] = useState("monday");

  const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      width: 52,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20
    },
    animatedView: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flex: 1
    }
  });

  function handleMonday() {
    setActive("monday");
  }

  function handleTuesday() {
    setActive("tuesday");
  }

  function handleWednesday() {
    setActive("wednesday");
  }

  function handleThursday() {
    setActive("thursday");
  }

  function handleFriday() {
    setActive("friday");
  }

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <Navbar />

      <Title>Programação do dia</Title>

      <HeaderContainer>
        <ButtonsContainer>
          {active == "monday" ? (
            <Button>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#2AF598", "#08AEEA"]}
                style={styles.gradient}
              >
                <ButtonActiveText>seg</ButtonActiveText>
              </LinearGradient>
            </Button>
          ) : (
            <Button onPress={handleMonday}>
              <ButtonText>seg</ButtonText>
            </Button>
          )}

          {active == "tuesday" ? (
            <Button>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#FF6700", "#BD0E5D"]}
                style={styles.gradient}
              >
                <ButtonActiveText>ter</ButtonActiveText>
              </LinearGradient>
            </Button>
          ) : (
            <Button onPress={handleTuesday}>
              <ButtonText>ter</ButtonText>
            </Button>
          )}

          {active == "wednesday" ? (
            <Button>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#08AEEA", "#017EC1"]}
                style={styles.gradient}
              >
                <ButtonActiveText>qua</ButtonActiveText>
              </LinearGradient>
            </Button>
          ) : (
            <Button onPress={handleWednesday}>
              <ButtonText>qua</ButtonText>
            </Button>
          )}

          {active == "thursday" ? (
            <Button>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#FEE140", "#FF6700"]}
                style={styles.gradient}
              >
                <ButtonActiveText>qui</ButtonActiveText>
              </LinearGradient>
            </Button>
          ) : (
            <Button onPress={handleThursday}>
              <ButtonText>qui</ButtonText>
            </Button>
          )}

          {active == "friday" ? (
            <Button>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#AC18E1", "#4330FC"]}
                style={styles.gradient}
              >
                <ButtonActiveText>sex</ButtonActiveText>
              </LinearGradient>
            </Button>
          ) : (
            <Button onPress={handleFriday}>
              <ButtonText>sex</ButtonText>
            </Button>
          )}
        </ButtonsContainer>
        <HeaderSeparator />
      </HeaderContainer>

      {active == "monday" ? (
        <Animatable.View
          animation="fadeInUp"
          duration={500}
          style={styles.animatedView}
        >
          <Monday />
        </Animatable.View>
      ) : (
        <Fragment />
      )}

      {active == "tuesday" ? (
        <Animatable.View
          animation="fadeInUp"
          duration={500}
          style={styles.animatedView}
        >
          <Tuesday />
        </Animatable.View>
      ) : (
        <Fragment />
      )}

      {active == "wednesday" ? (
        <Animatable.View
          animation="fadeInUp"
          duration={500}
          style={styles.animatedView}
        >
          <Wednesday />
        </Animatable.View>
      ) : (
        <Fragment />
      )}

      {active == "thursday" ? (
        <Animatable.View
          animation="fadeInUp"
          duration={500}
          style={styles.animatedView}
        >
          <Thursday />
        </Animatable.View>
      ) : (
        <Fragment />
      )}

      {active == "friday" ? (
        <Animatable.View
          animation="fadeInUp"
          duration={500}
          style={styles.animatedView}
        >
          <Friday />
        </Animatable.View>
      ) : (
        <Fragment />
      )}
    </Container>
  );
}
