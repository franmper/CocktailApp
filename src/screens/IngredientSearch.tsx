import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList } from "react-native";
import { getListOfIngredients } from "../utils/fetcher";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import { colors, paddingTop, width, height, spacing } from "../utils/theme";
import Loading from "../components/Loading";

const IngredientSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState([])
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getListOfIngredients().then((res) => {
      console.log(res);
      setIngredients(res.drinks)
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Ingredient Search" navigation={navigation} />
      <FlatList
        keyExtractor={item => item.strIngredient1}
        data={ingredients}
        renderItem={({ item }) => {
          return (
            <Text style={{color: colors.pink}}>{item.strIngredient1}</Text>
          )
        }}
      />
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

export default IngredientSearch;
