import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./LoginForm.css";

const LoginForm = ({ Login, error }) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const submitHandler = (e) => {
        e.preventDefault();
        Login(credentials);
    };

    return (
        <div className="container">
            <h2 className="title">Knowledge Hub</h2>
            <form className="login-form">
                <TextField
                    style={{ paddingTop: "20px" }}
                    id="outlined-basic"
                    variant="outlined"
                    type="name"
                    name="username"
                    placeholder="username"
                    onChange={(e) => {
                        console.log(e);
                        setCredentials({
                            ...credentials,
                            username: e.target.value,
                        });
                    }}
                    value={credentials.username}
                    required
                />
                <TextField
                    style={{ paddingTop: "20px" }}
                    id="outlined-basic"
                    variant="outlined"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            password: e.target.value,
                        })
                    }
                    value={credentials.password}
                    required
                />
                {error ? (
                    <div className="error">{error.message}</div>
                ) : (
                    <div></div>
                )}
                <Button
                    style={{ marginTop: "20px" }}
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={submitHandler}
                >
                    Log In
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;
