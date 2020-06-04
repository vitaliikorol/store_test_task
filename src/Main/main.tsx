import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import './main.scss'
import {SideBar} from "../SideBar/sideBar";
import {ClothesFromServer} from "../Additional/api";
import {ClothItem} from "../Additional/Interfaces";
import {ProductCard} from "../ProductCard/productCard";
import {sortFunction} from "../Additional/multipurposeFuncs";

export const Main = () => {
  const [clothes, setClothes] = useState([])
  const [activeView, setActiveView] = useState('All');
  const [viewSort, setViewSort] = useState(false);
  const [sortType, setSortType] = useState('')
  const goodsFromServer = useContext(ClothesFromServer);

  useEffect(() => {
   goodsFromServer.then(data => setClothes(data))
  }, [goodsFromServer])

  const clothAsPerView = useCallback(() => {
    return activeView === 'All'
      ? clothes
      : clothes.filter((el: ClothItem) => el.type === activeView)
  }, [clothes, activeView])

  const sortedClothes = useMemo(() => {
    return sortType === ''
    ? clothAsPerView()
      : sortFunction(clothAsPerView(), sortType)
  }, [sortType, clothAsPerView])

  return (
    <main className="Main">
      <SideBar activeView={activeView}
               setActiveView={setActiveView}
               viewSort={viewSort}
               setViewSort={setViewSort}
               sortType={sortType}
               setSortType={setSortType}
      />
      <div className="Main__catalog">
        {sortedClothes?.map((el: ClothItem) => (
          <ProductCard item={el} key={el.name}/>
        ))}
      </div>

    </main>
  )
}
