import React from "react";

const clothes = 'https://vitaliikorol.github.io/store_test_task/api/products.json'
const downloadClothes = () => fetch(clothes).then(response => response.json());

export const ClothesFromServer = React.createContext(downloadClothes())

