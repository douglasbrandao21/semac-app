import React from "react";
import { StyleSheet } from "react-native";

import { Button, ButtonActiveText, ButtonText } from "./styles.js";

import LinearGradient from "react-native-linear-gradient";

export default function ButtonTeste({
  active,
  text,
  initialColor,
  finalColor
}) {
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

  return active ? (
    <Button>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[initialColor, finalColor]}
        style={styles.gradient}
      >
        <ButtonActiveText>{text}</ButtonActiveText>
      </LinearGradient>
    </Button>
  ) : (
    <Button>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
