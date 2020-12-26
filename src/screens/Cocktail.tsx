import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";
import Title from "../components/Title";
import { colors, paddingTop, width, height, spacing } from "../utils/theme";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDetailCocktail } from "../utils/fetcher";
import Loading from "../components/Loading";

const Cocktail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktailInfo, setCocktailInfo] = useState([])
  const navigation = useNavigation();
  const { params }: any = useRoute();
  const cocktailId = params.cocktailId;
  console.log(cocktailId);

  useEffect(() => {
    setIsLoading(true);
    getDetailCocktail(cocktailId).then(res => {
      setCocktailInfo(res.drinks[0])
      setIsLoading(false);
    })
  }, [])

  if(isLoading) return <Loading />

  return (
    <SafeAreaView style={styles.container}>
      <Title text={cocktailInfo.strDrinkES ? cocktailInfo.strDrinkES : cocktailInfo.strDrink} navigation={navigation} />
      <View style={styles.superInfoContainer}>
        <View style={styles.outterInfoContainer}>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="bottle-wine" size={70} color={colors.pink} />
            <Text style={styles.infoText}>{cocktailInfo.strAlcoholic}</Text>
          </View>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="water" size={70} color={colors.pink} />
            <Text style={styles.infoText}>{cocktailInfo.strCategory}</Text>
          </View>
          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="glass-wine" size={70} color={colors.pink} />
            <Text style={styles.infoText}>{cocktailInfo.strGlass}</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <LinearGradient colors={[colors.ligthBlue, "transparent"]} start={{ x: -0.5, y: 0.8 }} style={styles.overlay} />
          <Image style={styles.image} source={{ uri: cocktailInfo.strDrinkThumb }} />
        </View>
      </View>
      <View style={{ width, marginTop: spacing }}>
        <Text style={{ fontSize: 25, color: colors.ligthBlue, paddingHorizontal: spacing, fontWeight: "bold" }}>Instructions</Text>
        <Text style={{ fontSize: 20, color: colors.ligthBlue, paddingHorizontal: spacing * 2 }}>
          {cocktailInfo.strInstructionsES ? cocktailInfo.strInstructionsES : cocktailInfo.strInstructions}
        </Text>
      </View>
      <View style={{ width, height: height * 0.3, marginTop: spacing }}>
        <Text style={{ fontSize: 25, color: colors.ligthBlue, paddingLeft: spacing, fontWeight: "bold" }}>Ingredients</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: width * 0.5 }}>
              {Object.entries(cocktailInfo).map((p, i) => {
                if (p[0].includes("strIngredient") && p[1]) {
                  return (
                    <Text key={i} style={{ fontSize: 20, color: colors.ligthBlue, paddingLeft: spacing * 2 }}>
                      {p[1]}
                    </Text>
                  );
                }
              })}
            </View>
            <View style={{ width: width * 0.5 }}>
              {Object.entries(cocktailInfo).map((p, i) => {
                if (p[0].includes("strMeasure") && p[1]) {
                  return (
                    <Text key={i} style={{ fontSize: 20, color: colors.ligthBlue, paddingLeft: spacing * 2 }}>
                      {p[1]}
                    </Text>
                  );
                }
              })}
            </View>
          </View>
        </ScrollView>
      </View>
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
  superInfoContainer: {
    width,
    height: height * 0.5,
    flexDirection: "row",
    paddingVertical: spacing,
    marginBottom: spacing
  },
  imageContainer: {
    width: width * 0.7,
    height: height * 0.5,
    alignSelf: "flex-start",
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
  overlay: {
    width: width * 0.75,
    height: height * 0.5,
    zIndex: 1,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
    borderRadius: spacing / 2,
  },
  outterInfoContainer: {
    width: width * 0.25,
    height: height * 0.5,
    backgroundColor: colors.black,
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: spacing / 2
  },
  infoContainer: {
    height: "33%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.ligthBlue,
    shadowOpacity: 0.6,
    shadowRadius: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
    color: colors.ligthBlue,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cocktail;
