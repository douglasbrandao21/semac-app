import React from "react";
import { StyleSheet } from "react-native";

import LinearGradient from "react-native-linear-gradient";

export default function GreenToBlueGradientBar(props) {
  const styles = StyleSheet.create({
    gradientStyle: {
      height: 2,
      width: 100,
      marginTop: 10,
      marginBottom: 10
    }
  });

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#E20473", "#FF4D43"]}
      style={styles.gradientStyle}
    />
  );
}
