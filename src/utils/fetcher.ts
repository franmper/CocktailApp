import axios from "axios";
import Constants from "expo-constants";

const { apiUrl } = Constants.manifest.extra;

const getRandomCocktail = async () => {
  const url: string = `${apiUrl}/random.php`;
  const { data } = await axios.get(url);
  return data;
};
const searchCocktailByName = async (name: string) => {
  const url: string = `${apiUrl}/search.php?s=${name}`;
  const { data } = await axios.get(url);
  return data;
};
const searchCocktailByIngredient = async (ingredient: string) => {
  const url: string = `${apiUrl}/filter.php?i=${ingredient}`;
  const { data } = await axios.get(url);
  return data;
};
const getCocktailsWithFirtsLetter = async (letter: string) => {
  if (letter.length === 1) {
    const url: string = `${apiUrl}/search.php?f=${letter}`;
    const { data } = await axios.get(url);
    return data;
  } else {
    return {
      message: "Debe ingresar solo una letra",
    };
  }
};
const getDetailCocktail = async (cocktailId: string) => {
  const url: string = `${apiUrl}/lookup.php?i=${cocktailId}`;
  const { data } = await axios.get(url);
  return data;
};
const getDetailIngedient = async (ingredient: string) => {
  const url: string = `${apiUrl}/search.php?i=${ingredient}`;
  const { data } = await axios.get(url);
  return data;
};
const filterCocktailByCategory = async (category: string) => {
  const url: string = `${apiUrl}/filter.php?c=${category}`;
  const { data } = await axios.get(url);
  return data;
};
const filterCocktailByGlass = async (glassType: string) => {
  const url: string = `${apiUrl}/filter.php?g=${glassType}`;
  const { data } = await axios.get(url);
  return data;
};
const filterCocktailByAlcoholic = async (hasAlcoholic: string) => {
  const url: string = `${apiUrl}/filter.php?a=${hasAlcoholic}`;
  const { data } = await axios.get(url);
  return data;
};
const getListOfIngredients = async () => {
  const url: string = `${apiUrl}/list.php?i=list`;
  const { data } = await axios.get(url);
  return data;
};
const getListOfCategories = async () => {
  const url: string = `${apiUrl}/list.php?c=list`;
  const { data } = await axios.get(url);
  return data;
};
const getListOfGlasses = async () => {
  const url: string = `${apiUrl}/list.php?g=list`;
  const { data } = await axios.get(url);
  return data;
};
const getListOfAlcoholic = async () => {
  const url: string = `${apiUrl}/list.php?a=list`;
  const { data } = await axios.get(url);
  return data;
};

export {
  getRandomCocktail,
  searchCocktailByName,
  searchCocktailByIngredient,
  getCocktailsWithFirtsLetter,
  getDetailCocktail,
  getDetailIngedient,
  filterCocktailByCategory,
  filterCocktailByGlass,
  filterCocktailByAlcoholic,
  getListOfIngredients,
  getListOfCategories,
  getListOfGlasses,
  getListOfAlcoholic,
};
