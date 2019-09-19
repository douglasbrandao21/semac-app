import React from "react";
import { StyleSheet } from "react-native";

import Gradient from "react-native-linear-gradient";

import { ButtonStyle, ButtonText } from "./styles";

export default function Button(props) {
  const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      width: 148,
      height: 31,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16
    }
  });

  return (
    <Gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[props.initialColor, props.finalColor]}
      style={[styles.gradient, props.styles]}
    >
      <ButtonStyle href={props.href} onPress={props.onPress}>
        <ButtonText>{props.text}</ButtonText>
      </ButtonStyle>
    </Gradient>
  );
}
