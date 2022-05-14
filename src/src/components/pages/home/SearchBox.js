import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";

const SearchBox = ({ user, categories, SearchData }) => {
    const [keyString, setKeyString] = useState("");
    const [category, setCategory] = useState({});

    const searchHandler = (e) => {
        e.preventDefault();
        SearchData({ user, keyString, category });
        console.log(keyString, category);
    };
    return (
        <div className="search-container">
            <div className="search">
                <Autocomplete
                    id="combo-box-demo"
                    options={categories}
                    getOptionLabel={(option) => option.title || ""}
                    style={{ width: 300 }}
                    onChange={(e, v) => setCategory(v)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Category"
                            variant="outlined"
                        />
                    )}
                />
                <div style={{ width: "100%", margin: "0 20px" }}>
                    <TextField
                        style={{ width: "100%" }}
                        id="outlined-basic"
                        variant="outlined"
                        onChange={(e) => {
                            setKeyString(e.target.value);
                        }}
                        value={keyString}
                    />
                </div>
                <Button
                    style={{ height: "55px", width: "180px" }}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={searchHandler}
                >
                    Search
                    <SearchIcon style={{ marginLeft: "10px" }}></SearchIcon>
                </Button>
            </div>
        </div>
    );
};

export default SearchBox;
