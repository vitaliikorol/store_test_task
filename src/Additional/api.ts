import React from "react";

const clothes = 'https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/api/products.json'
const downloadClothes = () => fetch(clothes).then(response => response.json());

export const ClothesFromServer = React.createContext(downloadClothes())

