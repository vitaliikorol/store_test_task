import React from "react";
import {NavLink} from 'react-router-dom'
import './header.scss'
import {Cart} from "../Cart/cart";

export const Header = () => {
  return (
    <header className="Header">
      <NavLink to="/" className="Header__link link-styling">
            <img src="https://vitaliikorol.github.io/store_test_task/images/icons/logo.png" alt="Yamamoto logo"
                 className="Header__link_logo"/>
      </NavLink>
      <Cart/>
    </header>
  )
}
