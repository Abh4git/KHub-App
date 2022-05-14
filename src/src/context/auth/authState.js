import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import {
    SET_LOADING,
    USER_LOGIN,
    CHECK_TOKEN,
    LOGOUT,
    SET_LOGGED_IN,
} from "../types";
import { LOCAL_AUTH_BASE_URL } from "../../Constants";

const AuthState = (props) => {
    const initialState = {
        user: {},
        error: "",
        login: false,
        isLoggedIn: false,
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const userLogin = async (username, password) => {
        setLoading(true);
        let payload = null;
        try {
            const res = await axios.post(`${LOCAL_AUTH_BASE_URL}/signin`, {
                username: username,
                password: password,
            });
            if (!res.data.message) {
                localStorage.setItem(
                    "khub-login",
                    JSON.stringify({
                        data: res.data,
                    })
                );
            }
            payload = {
                user: res.data,
                isLoggedIn: true,
            };
        } catch (err) {
            payload = {
                error: err.response.data,
                isLoggedIn: false,
            };
        } finally {
            dispatch({ type: USER_LOGIN, payload: payload });
        }
    };

    const checkToken = async () => {
        setLoggedIn();
        setLoading();
        let payload = null;
        let store = JSON.parse(localStorage.getItem("khub-login"));
        try {
            if (store && store.data) {
                const res = await axios.get(`${LOCAL_AUTH_BASE_URL}/check`, {
                    headers: {
                        Authorization: `Bearer ${store.data.accessToken}`,
                    },
                });
                if (res.data.loggedin) {
                    payload = {
                        user: store.data,
                        error: null,
                        isLoggedIn: true,
                    };
                } else {
                    payload = {
                        user: null,
                        error: res.data.message,
                        isLoggedIn: false,
                    };
                }
            } else {
                payload = {
                    user: null,
                    error: null,
                    isLoggedIn: false,
                };
            }
        } catch (err) {
            payload = {
                user: null,
                error: err,
                isLoggedIn: false,
            };
        } finally {
            dispatch({ type: CHECK_TOKEN, payload: payload });
        }
    };

    const logout = () => {
        localStorage.removeItem("khub-login");
        let payload = {
            user: null,
            error: null,
            isLoggedIn: false,
        };
        dispatch({ type: LOGOUT, payload: payload });
    };

    const setLoading = () => dispatch({ type: SET_LOADING });
    const setLoggedIn = () => dispatch({ type: SET_LOGGED_IN });

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                isLoggedIn: state.isLoggedIn,
                userLogin,
                setLoading,
                checkToken,
                logout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
