import { SEARCH, SET_LOADING, GET_CATEGORIES } from "../types";

const SearchReducer = (state, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                results: action.payload.results,
                loading: false,
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
    }
};
export default SearchReducer;
