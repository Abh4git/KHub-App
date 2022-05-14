import React, { useReducer } from "react";
import axios from "axios";
import SearchContext from "./searchContext";
import SearchReducer from "./searchReducer";
import { SET_LOADING, GET_CATEGORIES, SEARCH } from "../types";
import { LOCAL_API_BASE_URL } from "../../Constants";

const resultData = [
    {
        _id: "1",
        title: "IEEE CS Magazine - Dummy",
        keywords: "trends",
        category: "magazine",
        summary: "Contains details of Software engineering trends like devops",
        authors: "Heiko, Jan Bosch",
        credibility: 5,
        link: "https://www.computer.org/csdl/magazine/co/2022/02",
    },
    {
        _id: "1",
        title: "IEEE CS Magazine - Dummy",
        keywords: "trends",
        category: "magazine",
        summary: "Contains details of Software engineering trends like devops",
        authors: "Heiko, Jan Bosch",
        credibility: 5,
        link: "https://www.computer.org/csdl/magazine/co/2022/02",
    },
    {
        _id: "1",
        title: "IEEE CS Magazine - Dummy",
        keywords: "trends",
        category: "magazine",
        summary: "Contains details of Software engineering trends like devops",
        authors: "Heiko, Jan Bosch",
        credibility: 5,
        link: "https://www.computer.org/csdl/magazine/co/2022/02",
    },
    {
        _id: "1",
        title: "IEEE CS Magazine - Dummy",
        keywords: "trends",
        category: "magazine",
        summary: "Contains details of Software engineering trends like devops",
        authors: "Heiko, Jan Bosch",
        credibility: 5,
        link: "https://www.computer.org/csdl/magazine/co/2022/02",
    },
    {
        _id: "1",
        title: "IEEE CS Magazine - Dummy",
        keywords: "trends",
        category: "magazine",
        summary: "Contains details of Software engineering trends like devops",
        authors: "Heiko, Jan Bosch",
        credibility: 5,
        link: "https://www.computer.org/csdl/magazine/co/2022/02",
    },
    {
        _id: "1",
        title: "IEEE CS Magazine - Dummy",
        keywords: "trends",
        category: "magazine",
        summary: "Contains details of Software engineering trends like devops",
        authors: "Heiko, Jan Bosch",
        credibility: 5,
        link: "https://www.computer.org/csdl/magazine/co/2022/02",
    },
];

const categories = [
    { title: "Software Architecture", key: 0 },
    { title: "Devops", key: 1 },
];

const SearchState = (props) => {
    const initialState = {
        results: [],
        categories: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(SearchReducer, initialState);

    const SetLoading = () => dispatch({ type: SET_LOADING });

    const GetCategories = () => {
        let payload = null;
        payload = {
            categories: categories,
        };
        dispatch({ type: GET_CATEGORIES, payload: payload });
    };

    const SearchData = async (query) => {
        SetLoading();
        let payload = {};
        let store = JSON.parse(localStorage.getItem("khub-login"));
        try {
            if (store && store.data) {
                const res = await axios.get(`${LOCAL_API_BASE_URL}/content`, {
                    headers: {
                        Authorization: `Bearer ${store.data.accessToken}`,
                    },
                });
                payload = {
                    results: res.data,
                    //results: [...res.data, ...resultData],
                };
            }
        } catch (err) {
            payload = {
                results: [],
            };
        } finally {
            dispatch({ type: SEARCH, payload: payload });
        }
    };

    return (
        <SearchContext.Provider
            value={{
                results: state.results,
                categories: state.categories,
                SearchData,
                SetLoading,
                GetCategories,
            }}
        >
            {props.children}
        </SearchContext.Provider>
    );
};

export default SearchState;
