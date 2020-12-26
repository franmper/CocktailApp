import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors, width, height, spacing } from "../utils/theme";

interface SearchButtonProps {
  text: string;
  handleClick: () => void;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  textColor?: string;
}

const SearchButton = ({ text, handleClick, backgroundColor = colors.ligthBlue, textColor = colors.black, backgroundImageUrl }: SearchButtonProps) => {
  return (
    <Pressable style={[styles.searchButtonContainer, { backgroundColor }]} onPress={handleClick}>
      <Text style={[styles.searchButtonText, { color: textColor }]}>Search by {text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchButtonContainer: {
    width: width - spacing * 2,
    height: height * 0.1,
    marginTop: spacing,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: spacing / 2,
  },
  searchButtonText: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default SearchButton;
