import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable } from "react-native";
import Title from "../components/Title";
import { getRandomCocktail } from "../utils/fetcher";
import { colors, paddingTop, width, height, spacing } from "../utils/theme";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Cocktail = () => {
  const navigation = useNavigation();
  const { params }: any = useRoute();
  const cocktailInfo = params.cocktailData;

  return (
    <SafeAreaView style={styles.container}>
      <Title text={cocktailInfo.strDrinkES ? cocktailInfo.strDrinkES : cocktailInfo.strDrink} navigation={navigation} />
    </SafeAreaView>
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

export default Cocktail;
