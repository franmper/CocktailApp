import React from "react";
import { Text, FlatList, Pressable, Image, StyleSheet, View } from "react-native";
import { spacing, colors, width } from "../utils/theme";

interface DrinksProps {
  drinks: string[];
  navigation: any;
}

const DrinksList = ({ drinks, navigation }: DrinksProps) => {
  return (
    <FlatList
      style={styles.container}
      keyExtractor={(item) => item.idDrink}
      data={drinks}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <Pressable
            style={styles.pressable}
            onPress={() =>
              navigation.navigate("Cocktail", {
                cocktailId: item.idDrink,
              })
            }
          >
            <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
            <Text style={styles.text}>{item.strDrink}</Text>
          </Pressable>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing,
    backgroundColor: colors.black,
  },
  pressable: {
    backgroundColor: colors.blue,
    marginVertical: spacing / 2,
    height: spacing * 5,
    borderRadius: spacing / 2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing / 2
  },
  image: {
    width: spacing * 4,
    height: spacing * 4,
    resizeMode: "cover",
    marginRight: spacing * 2,
    borderRadius: spacing / 2,
  },
  text: {
    color: colors.ligthBlue,
    fontSize: 20,
    width: width * 0.65
  },
});

export default DrinksList;
