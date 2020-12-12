import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Cocktail from "../screens/Cocktail";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name={"Home"}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={"Cocktail"}
        component={Cocktail}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default HomeNavigator;
