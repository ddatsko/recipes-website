import {STORE_RECIPES, STORE_SEARCH_RESULTS} from "./type";

const storeRecipes = (newRecipes) => ({type: STORE_RECIPES, recipes: newRecipes});
const storeSearchResults = (newRecipes) => ({type: STORE_SEARCH_RESULTS, searchResults: newRecipes});

export {storeRecipes, storeSearchResults}
