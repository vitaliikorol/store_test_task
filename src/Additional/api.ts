import React from 'react';

const clothes = 'https://vitaliikorol.github.io/store_test_task/api/products.json';
const downloadClothes = () => fetch(clothes).then(response => response.json());

export const ClothesFromServer = React.createContext(downloadClothes());

// icons

export const cartIcon = 'images/icons/cart.png';
export const closeIcon = 'images/icons/close.png';
export const logoIcon = 'images/icons/logo.png';
export const upArrowIcon = 'images/icons/up-arrow.png';

// cloth types

export const sneakers = 'Sneakers';
export const coats = 'Coats';
export const shirts = 'Shirts';
export const trousers = 'Trousers';
export const allView = 'All';

// sorting options

export const priceAsc = 'Price_asc';
export const priceDesc = 'Price_desc';
export const popularity = 'Popularity';
export const newest = 'Newest';
