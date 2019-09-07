import React from "react";

import { StyleSheet } from "react-native";

import Gradient from "react-native-linear-gradient";

export default function CustomGradient(props) {
  const styles = StyleSheet.create({
    gradient: {
      height: props.height,
      width: props.width,
      marginTop: props.marginTop ? props.marginTop : 0,
      marginBottom: props.marginBottom ? props.marginBottom : 0
    }
  });

  return (
    <Gradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[props.initialColor, props.finalColor]}
      style={styles.gradient}
    />
  );
}
