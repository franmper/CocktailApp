import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, ActivityIndicator } from "react-native";
import Title from "../components/Title";
import { getRandomCocktail } from "../utils/fetcher";
import { colors, paddingTop, width, height, spacing } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [cocktailInfo, setCocktailInfo]: any = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getRandomCocktail().then((res) => {
      setCocktailInfo(res.drinks[0]);
      setIsLoading(false);
    });
    console.log(cocktailInfo);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Trago del día" navigation={navigation} />
      <Pressable
        onPress={() =>
          navigation.navigate("Cocktail", {
            cocktailData: cocktailInfo,
          })
        }
      >
        {isLoading ? (
          <View style={[{ justifyContent: "center", alignItems: "center" }, styles.container]}>
            <ActivityIndicator size={"large"} color={colors.ligthBlue} />
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <LinearGradient colors={[colors.blue, "transparent"]} start={{ x: 0.3, y: 0 }} style={styles.overlay} />
            <Image style={styles.image} source={{ uri: cocktailInfo.strDrinkThumb }} />
            <Text style={styles.cocktailName}>{cocktailInfo.strDrinkES ? cocktailInfo.strDrinkES : cocktailInfo.strDrink}</Text>
            <Text style={styles.cocktailCategory}>{cocktailInfo.strCategory}</Text>
          </View>
        )}
      </Pressable>
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
  imageContainer: {
    width,
    height: height * 0.5,
    alignSelf: "center",
  },
  overlay: {
    width,
    height: height * 0.5,
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
    transform: [{ rotate: "180deg" }],
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 0,
    opacity: 0.9,
  },
  cocktailName: {
    position: "absolute",
    fontSize: 30,
    bottom: spacing * 2,
    right: spacing,
    color: colors.ligthBlue,
    fontWeight: "600",
    zIndex: 2,
    flexWrap: "wrap",
  },
  cocktailCategory: {
    position: "absolute",
    fontSize: 15,
    bottom: spacing,
    right: spacing,
    color: colors.ligthBlue,
    fontWeight: "400",
    zIndex: 2,
  },
});

export default Home;
