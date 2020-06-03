import React, {FC, useState} from "react";
import './productCard.scss'
import {ClothItem} from "../Additional/Interfaces";

type Params = {
  item: ClothItem,
}

export const ProductCard: FC<Params> = ({item}) => {
  const [image] = useState(item.product_images[0])
  return (
    <section className="ProductCard">
      <img src={image} alt="" className="ProductCard__image"/>
    </section>
  )
}
