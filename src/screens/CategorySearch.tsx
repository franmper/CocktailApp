import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { filterCocktailByCategory, getListOfCategories } from "../utils/fetcher";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import { colors, paddingTop, width, height } from "../utils/theme";
import Loading from "../components/Loading";
import { Picker } from "@react-native-picker/picker";
import DrinksList from "../components/DrinksList";

const CategorySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [categoriesSelected, setCategoriesSelected] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getListOfCategories().then((res) => {
      setCategories(res.drinks);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const focus = navigation.addListener("focus", () =>
    filterCocktailByCategory(categoriesSelected).then((res) => {
        setDrinks(res.drinks);
      })
    );
    return focus;
  }, [navigation, categoriesSelected]);

  useEffect(() => {
    filterCocktailByCategory(categoriesSelected).then((res) => {
      setDrinks(res.drinks);
    });
  }, [categoriesSelected]);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Category Search" navigation={navigation} />
      <View style={{ height: 120, zIndex: -100, borderBottomWidth: 2, borderBottomColor: colors.pink }}>
        <Picker
          selectedValue={categoriesSelected}
          style={{ height: 100, width, backgroundColor: colors.black, bottom: 50 }}
          itemStyle={{ color: colors.pink, fontSize: 30, fontWeight: "bold" }}
          onValueChange={(itemValue) => setCategoriesSelected(itemValue)}
        >
          {categories.map((category: { strCategory: string }) => {
            return <Picker.Item key={category.strCategory} label={category.strCategory} value={category.strCategory} />;
          })}
        </Picker>
      </View>
      <DrinksList drinks={drinks} navigation={navigation}/>
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

export default CategorySearch;
