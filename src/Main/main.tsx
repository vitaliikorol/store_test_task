import React, {useContext, useEffect, useState} from "react";
import './main.scss'
import {SideBar} from "../SideBar/sideBar";
import {ClothesFromServer} from "../Additional/api";
import {ClothItem} from "../Additional/Interfaces";
import {ProductCard} from "../ProductCard/productCard";

export const Main = () => {
  const [clothes, setClothes] = useState([])
  const [activeView, setActiveView] = useState('All');
  const [viewSort, setViewSort] = useState(false);
  const goodsFromServer = useContext(ClothesFromServer);

  useEffect(() => {
    goodsFromServer.then(data => setClothes(data))
  }, [goodsFromServer])

  console.log(clothes)

  return (
    <main className="Main">
      <SideBar activeView={activeView}
                setActiveView={setActiveView}
                viewSort={viewSort}
                setViewSort={setViewSort}
    />
    <div className="Main__catalog">
      {clothes.map((el: ClothItem) => (
        <ProductCard item={el}/>
      ))}
    </div>

    </main>
  )
}
