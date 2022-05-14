import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";

const Header = ({ user, Logout }) => {
    const logoutHandler = () => {
        setAnchorEl(null);
        Logout();
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="header-container">
            <div className="header">
                <h2>Knowledge Hub</h2>
                <div className="user">
                    <p onClick={handleClick}>{user.username}</p>
                    <IconButton
                        color="primary"
                        component="span"
                        onClick={handleClick}
                    >
                        <AccountCircleIcon fontSize="large" />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem> */}
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
