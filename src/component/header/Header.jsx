import React from "react";
import "./Header.css";
import { Button, Badge } from "@material-ui/core";
import {
  ShoppingBasket,
} from "@material-ui/icons";

const Header = () => {
  const cartItemsCount = 4;
  return (
    <div className="header">
      <div className="redStrip"></div>
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="logo">
              <img src="./src/assets/site-logo.svg" alt="" />
            </div>
          </div>
          <div className="right">
            <Button variant="text">Login</Button> |
            <Button variant="text">Register</Button>
            <Button variant="outlined" color="primary" className="cart">
              <Badge badgeContent={cartItemsCount} color="error">
                <ShoppingBasket className="cartIcon" />
              </Badge>
              <div className="cartName">Cart</div>
            </Button>
          </div>
        </div>
        <div className="bottom">
          <div className="search-bar">
            <input type="text" className="search-input" placeholder="What are you looking for" />
            <Button variant="contained" className="search-button" >Search</Button>
            <Button variant="contained" className="cancel-button">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
