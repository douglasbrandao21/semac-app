import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  background: {
    height: 2,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
    color: "#2AF598"
  }
});

const VividGreenBar = () => <View style={styles.gradientStyle} />;

export default VividGreenBar;
