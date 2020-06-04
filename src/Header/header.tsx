import React from "react";
import {NavLink} from 'react-router-dom'
import './header.scss'
import {Cart} from "../Cart/cart";
import {logoIcon} from "../Additional/api";

export const Header = () => {
  return (
    <header className="Header">
      <NavLink to="/" className="Header__link link-styling">
            <img
              src={logoIcon}
              alt="Yamamoto logo"
              className="Header__link_logo"
            />
      </NavLink>
      <Cart/>
    </header>
  )
}
