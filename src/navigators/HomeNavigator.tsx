import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Cocktail from "../screens/Cocktail";
import CategorySearch from "../screens/CategorySearch";
import GlassSearch from "../screens/GlassSearch";
import IngredientSearch from "../screens/IngredientSearch";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={"Home"} component={Home} />
      <Screen name={"Cocktail"} component={Cocktail} />
      <Screen name={"Category Search"} component={CategorySearch} />
      <Screen name={"Glass Search"} component={GlassSearch} />
      <Screen name={"Ingredient Search"} component={IngredientSearch} />
    </Navigator>
  );
};

export default HomeNavigator;
