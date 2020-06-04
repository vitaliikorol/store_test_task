import React from "react";

const clothes = 'https://vitaliikorol.github.io/store_test_task/api/products.json'
const downloadClothes = () => fetch(clothes).then(response => response.json());

export const ClothesFromServer = React.createContext(downloadClothes())

export const cartIcon = "images/icons/cart.png";
export const closeIcon = "images/icons/close.png";
export const logoIcon = "images/icons/logo.png";
export const up_arrowIcon = "images/icons/up-arrow.png"
