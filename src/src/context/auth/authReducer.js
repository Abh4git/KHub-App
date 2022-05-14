import {
    USER_LOGIN,
    SET_LOADING,
    CHECK_TOKEN,
    LOGOUT,
    SET_LOGGED_IN,
} from "../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case USER_LOGIN:
            console.log("action.payload", action.payload);
            return {
                ...state,
                user: action.payload.user,
                error: action.payload.error,
                isLoggedIn: action.payload.isLoggedIn,
                loading: false,
            };
        case CHECK_TOKEN:
            return {
                ...state,
                user: action.payload.user,
                error: action.payload.error,
                isLoggedIn: action.payload.isLoggedIn,
                loading: false,
            };
        case LOGOUT:
            return {
                ...state,
                user: action.payload.user,
                error: action.payload.error,
                isLoggedIn: action.payload.isLoggedIn,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};
export default AuthReducer;
