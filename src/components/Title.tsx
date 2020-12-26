import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, spacing } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";

interface TitleProps {
  text: string;
  navigation: any;
}

const Title = ({ text, navigation }: TitleProps) => {
  return (
    <View style={styles.titleContainer}>
      {navigation.canGoBack() && <Ionicons style={styles.icon} name="ios-arrow-back" size={35} color={colors.ligthBlue} onPress={() => navigation.goBack()} />}
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing,
    borderBottomWidth: 2,
    borderBottomColor: colors.ligthBlue,
    backgroundColor: colors.black
  },
  title: {
    color: colors.ligthBlue,
    fontSize: 30,
    fontWeight: "500",
  },
  icon: {
    marginRight: spacing,
  },
});

export default Title;
