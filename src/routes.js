import React from "react";

import { createAppContainer, createBottomTabNavigator } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome5";

import Home from "~/pages/Home";
import Infos from "~/pages/Infos";
import Programação from "~/pages/Schedules";

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Infos: {
        screen: Infos,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name="info-circle" color={tintColor} size={20} />
          )
        })
      },
      Home: {
        screen: Home,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" color={tintColor} size={20} />
          )
        })
      },
      Programação: {
        screen: Programação,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name="calendar-day" color={tintColor} size={20} />
          )
        })
      }
    },
    {
      initialRouteName: "Home",
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: "#FCFCFC",
        inactiveTintColor: "rgba(255, 255, 255, 0.2)",
        style: {
          backgroundColor: "#0C0A17",
          fontFamily: "Montserrat-Regular"
        }
      }
    }
  )
);

export default Routes;
