import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { colors, paddingTop, width, height, spacing } from "../utils/theme";

const Loading = () => {
  return (
    <View style={[{ justifyContent: "center", alignItems: "center" }, styles.container]}>
      <ActivityIndicator size={"large"} color={colors.ligthBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop,
    width,
    height,
    backgroundColor: colors.black,
  },
});

export default Loading;
