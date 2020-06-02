import React from "react";
import './header.scss'
import {Cart} from "../Cart/cart";

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header__empty"></div>
      <img src="images/icons/logo.png" alt="Yamamoto logo" className="Header__logo"/>
      <Cart />
    </header>
  )
}
