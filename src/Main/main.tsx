import React, {useContext, useEffect, useState} from "react";
import './main.scss'
import {SideBar} from "../SideBar/sideBar";
import {ClothesFromServer} from "../Additional/api";
import {ClothItem} from "../Additional/Interfaces";
import {ProductCard} from "../ProductCard/productCard";

export const Main = () => {
  const [clothes, setClothes] = useState([])
  const [sortedClothes, setSortedClothes] = useState(clothes)
  const [activeView, setActiveView] = useState('All');
  const [viewSort, setViewSort] = useState(false);
  const goodsFromServer = useContext(ClothesFromServer);

  useEffect(() => {
    goodsFromServer.then(data => setClothes(data));
  }, [goodsFromServer])

  useEffect(() => {

  }, [viewSort]);

  useEffect(() => {
    activeView === 'All'
      ? setSortedClothes(clothes)
      : setSortedClothes(clothes.filter((el: ClothItem) => el.type === activeView))
  }, [activeView])


  const defineClothes = () => {
    switch (activeView) {
      case 'All':
        return clothes;
      default:
        return sortedClothes;
    }
  }


  return (
    <main className="Main">
      <SideBar activeView={activeView}
                setActiveView={setActiveView}
                viewSort={viewSort}
                setViewSort={setViewSort}
    />
    <div className="Main__catalog">
      {defineClothes().map((el: ClothItem) => (
        <ProductCard item={el} key={el.name}/>
      ))}
    </div>

    </main>
  )
}
