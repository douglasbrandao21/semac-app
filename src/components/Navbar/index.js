import React from "react";
import { StyleSheet, View, Linking } from "react-native";

import { Logo, Button, ButtonText } from "./styles";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 64,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0C0A17",

    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 11
    },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 23
  }
});

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Logo source={require("~/assets/images/entire_green.png")} />

      <Button
        onPress={() =>
          Linking.openURL("https://semac-inscriptions.web.app/inscription")
        }
      >
        <ButtonText>INSCREVA-SE</ButtonText>
      </Button>
    </View>
  );
}
