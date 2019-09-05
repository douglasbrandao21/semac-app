import React from "react";
import { Text, StyleSheet } from "react-native";

import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";

import BoldText from "~/components/BoldText";

import Home from "~/pages/Home";
import Infos from "~/pages/Infos";
import Programacao from "~/pages/Schedules";

const Routes = createAppContainer(
  createMaterialBottomTabNavigator(
    {
      Info: {
        screen: Infos,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="info-circle" color={tintColor} size={18} />
          )
        }
      },
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" color={tintColor} size={18} />
          )
        }
      },
      Programacao: {
        screen: Programacao,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="calendar-day" color={tintColor} size={18} />
          )
        }
      }
    },
    {
      initialRouteName: "Home",
      activeTintColor: "#FFF",
      inactiveTintColor: "rgba(255,255,255,0.2)",
      shifting: true,
      barStyle: { backgroundColor: "#0C0A17", fontFamily: "Montserrat-Regular" }
    }
  )
);

export default Routes;
