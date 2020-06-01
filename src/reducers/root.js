import { STORE_RECIPES, STORE_SEARCH_RESULTS } from "../actions/type";

const initialState = {recipes: [], searchResults: []};

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case STORE_RECIPES: {
            return {...state, recipes: action.recipes};
        }
        case STORE_SEARCH_RESULTS: {
            return {...state, searchResults: action.searchResults}
        }
        default:
            return state;
    }
}