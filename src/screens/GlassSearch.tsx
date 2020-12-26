import { filterCocktailByGlass, getListOfGlasses } from "../utils/fetcher";
import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";
import { colors, paddingTop, width, height } from "../utils/theme";
import Loading from "../components/Loading";
import { Picker } from "@react-native-picker/picker";
import DrinksList from "../components/DrinksList";

const GlassSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [glasses, setGlasses] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [glassSelected, setGlassSelected] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getListOfGlasses().then((res) => {
      setGlasses(res.drinks);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const focus = navigation.addListener("focus", () =>
      filterCocktailByGlass(glassSelected).then((res) => {
        setDrinks(res.drinks);
      })
    );
    return focus;
  }, [navigation, glassSelected]);

  useEffect(() => {
    filterCocktailByGlass(glassSelected).then((res) => {
      setDrinks(res.drinks);
    })
  }, [glassSelected]);

  if (isLoading) return <Loading />;

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Glass Search" navigation={navigation} />
      <View style={{ height: 120, zIndex: -100, borderBottomWidth: 2, borderBottomColor: colors.pink }}>
        <Picker
          selectedValue={glassSelected}
          style={{ height: 100, width, backgroundColor: colors.black, bottom: 50 }}
          itemStyle={{ color: colors.pink, fontSize: 30, fontWeight: "bold" }}
          onValueChange={(itemValue) => setGlassSelected(itemValue)}
        >
          {glasses.map((glass: { strGlass: string }) => {
            if (glass.strGlass != "") {
              return <Picker.Item key={glass.strGlass} label={glass.strGlass} value={glass.strGlass} />;
            }
          })}
        </Picker>
      </View>
      <DrinksList drinks={drinks} navigation={navigation} />
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

export default GlassSearch;
