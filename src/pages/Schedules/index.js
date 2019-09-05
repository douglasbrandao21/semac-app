import React, { Fragment, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Navbar from "~/components/Navbar";

import {
  Container,
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
  const [monday, setMonday] = useState(true);
  const [tuesday, setTuesday] = useState(true);
  const [wednesday, setWednesday] = useState(true);
  const [thursday, setThursday] = useState(true);
  const [friday, setFriday] = useState(true);

  const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      width: 52,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20
    }
  });

  function isAllTrue() {
    return monday && tuesday && wednesday && thursday && friday;
  }

  function disableAll() {
    setMonday(false);
    setTuesday(false);
    setWednesday(false);
    setThursday(false);
    setFriday(false);
  }

  function handleMonday() {
    disableAll();
    setMonday(true);
  }

  function handleTuesday() {
    disableAll();
    setTuesday(true);
  }

  function handleWednesday() {
    disableAll();
    setWednesday(true);
  }

  function handleThursday() {
    disableAll();
    setThursday(true);
  }

  function handleFriday() {
    disableAll();
    setFriday(true);
  }

  return (
    <Container contentContainerStyle={{ alignItems: "center" }}>
      <Navbar />

      <Title>Programação do dia</Title>

      {isAllTrue() ? (
        <ButtonsContainer>
          <Button onPress={handleMonday}>
            <ButtonText>seg</ButtonText>
          </Button>

          <Button>
            <ButtonText onPress={handleTuesday}>ter</ButtonText>
          </Button>

          <Button onPress={handleWednesday}>
            <ButtonText>qua</ButtonText>
          </Button>

          <Button onPress={handleThursday}>
            <ButtonText>qui</ButtonText>
          </Button>

          <Button onPress={handleFriday}>
            <ButtonText>sex</ButtonText>
          </Button>
        </ButtonsContainer>
      ) : (
        <ButtonsContainer>
          {monday ? (
            <Button onPress={handleMonday}>
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

          {tuesday ? (
            <Button onPress={handleTuesday}>
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

          {wednesday ? (
            <Button onPress={handleWednesday}>
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

          {thursday ? (
            <Button onPress={handleThursday}>
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

          {friday ? (
            <Button onPress={handleThursday}>
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
      )}

      {monday ? <Monday /> : <Fragment />}

      {tuesday ? <Tuesday /> : <Fragment />}

      {wednesday ? <Wednesday /> : <Fragment />}

      {thursday ? <Thursday /> : <Fragment />}

      {friday ? <Friday /> : <Fragment />}
    </Container>
  );
}
