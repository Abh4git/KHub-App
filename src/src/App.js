import React from "react";
import "./App.css";
import Login from "./components/pages/login/Login";
import AuthState from "./context/auth/authState";
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

function App() {
    return (
        <AuthState>
            <div className="App">
                <Login />
            </div>
        </AuthState>
    );
}

export default App;
