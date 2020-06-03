import React, {useContext, useEffect, useMemo, useState} from "react";
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
    goodsFromServer.then(data => setClothes(data));
  }, [goodsFromServer])

  useEffect(() => {

  }, [viewSort]);


  const sortedClothes = useMemo(() => {
    return activeView === 'All'
      ? clothes
      : clothes.filter((el: ClothItem) => el.type === activeView)
  }, [clothes, activeView])


  //
  // const defineClothes = () => {
  //   switch (activeView) {
  //     case 'All':
  //       return clothes;
  //     default:
  //       return sortedClothes;
  //   }
  // }


  return (
    <main className="Main">
      <SideBar activeView={activeView}
                setActiveView={setActiveView}
                viewSort={viewSort}
                setViewSort={setViewSort}
    />
    <div className="Main__catalog">
      {sortedClothes.map((el: ClothItem) => (
        <ProductCard item={el} key={el.name}/>
      ))}
    </div>

    </main>
  )
}
