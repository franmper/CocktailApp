import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable, ActivityIndicator, ScrollView } from "react-native";
import Title from "../components/Title";
import { getRandomCocktail } from "../utils/fetcher";
import { colors, paddingTop, width, height, spacing } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";
import SearchButton from "../components/SearchButton";
import Loading from "../components/Loading";

const Home = () => {
  const [cocktailInfo, setCocktailInfo]: any = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getRandomCocktail().then((res) => {
      console.log(res)
      setCocktailInfo(res.drinks[0]);
      setIsLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Drink of the day" navigation={navigation} />
      <Pressable
        onPress={() =>
          navigation.navigate("Cocktail", {
            cocktailId: cocktailInfo.idDrink,
          })
        }
      >
        {isLoading ? (
          <Loading />
        ) : (
          <View style={styles.imageContainer}>
            <LinearGradient colors={[colors.blue, "transparent"]} start={{ x: 0.3, y: 0 }} style={styles.overlay} />
            <Image style={styles.image} source={{ uri: cocktailInfo.strDrinkThumb }} />
            <Text style={styles.cocktailName}>{cocktailInfo.strDrinkES ? cocktailInfo.strDrinkES : cocktailInfo.strDrink}</Text>
            <Text style={styles.cocktailCategory}>{cocktailInfo.strCategory}</Text>
          </View>
        )}
      </Pressable>
      <ScrollView style={{marginTop: spacing}}>
        <SearchButton text={"drink category"} handleClick={() => navigation.navigate('Category Search')}/>
        <SearchButton text={"glass"} handleClick={() => navigation.navigate('Glass Search')}/>
        <SearchButton text={"ingredient"} handleClick={() => navigation.navigate('Ingredient Search')}/>
      </ScrollView>
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
    width: width - spacing * 2,
    height: height * 0.5,
    marginTop: spacing,
    alignSelf: "center",
    borderRadius: spacing / 2,
  },
  overlay: {
    width: width - spacing * 2,
    height: height * 0.5,
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.8,
    transform: [{ rotate: "180deg" }],
    borderRadius: spacing / 2,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 0,
    opacity: 0.9,
    borderRadius: spacing / 2,
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
  searchButtonContainer: {
    width: width - spacing * 2,
    height: height * 0.1,
    backgroundColor: colors.purple,
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

export default Home;
