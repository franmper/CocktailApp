import { Dimensions, StatusBar } from "react-native";

export const colors = {
  pink: "#f72585",
  purple: "#7209b7",
  blue: "#3a0ca3",
  black: "#0a0f0d",
  ligthBlue: "#4cc9f0",
};

export const width = Dimensions.get("screen").width;
export const height = Dimensions.get("screen").height;
export const paddingTop = StatusBar.currentHeight;
export const spacing = 15;
