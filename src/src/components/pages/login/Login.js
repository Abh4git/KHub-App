import React, { useContext, useEffect } from "react";
import AuthContext from "../../../context/auth/authContext";
import SearchState from "../../../context/search/searchState";
import Home from "../home/Home";
import LoginForm from "./LoginForm";
import CircularProgress from "@mui/material/CircularProgress";
import { CLIENT_SALT } from "../../../Constants";
import "./Login.css";

const bcrypt = require("bcryptjs");

const Login = () => {
    const authContext = useContext(AuthContext);
    const { userLogin, checkToken, logout, user, error, isLoggedIn, loading } =
        authContext;

    useEffect(() => {
        checkToken();
        // eslint-disable-next-line
    }, []);

    const LogIn = async (credentials) => {
        bcrypt.hash(credentials.password, CLIENT_SALT, async (err, hash) => {
            await userLogin(credentials.username, hash);
        });
    };

    const Logout = () => {
        logout();
    };

    return (
        <div>
            {isLoggedIn ? (
                <SearchState>
                    <Home user={user} Logout={Logout} />
                </SearchState>
            ) : loading ? (
                <div className="login-container">
                    <CircularProgress />
                </div>
            ) : (
                <div className="login-container">
                    <LoginForm Login={LogIn} error={error} />
                </div>
            )}
        </div>
    );
};

export default Login;
