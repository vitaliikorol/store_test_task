import React, {FC, useState} from "react";
import './productCard.scss'
import {ClothItem} from "../Additional/Interfaces";
import cn from 'classnames';

type Params = {
  item: ClothItem,
}

export const ProductCard: FC<Params> = ({item}) => {
  const [activeImage, setActiveImage] = useState(item.product_images[0])

  const handleActiveImage = (imgUrl: string) => {
    setActiveImage(imgUrl)
  }




  return (
    <section className="ProductCard">
      <img src={activeImage} alt="" className="ProductCard__image"/>
      <div className="ProductCard__slider ProdSlider">
        <button className="ProdSlider__button">
          <img src="https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/up-arrow.png" alt="&larr;" className="ProdSlider__button ProdSlider__button_left"/>
        </button>
        <ul className="ProdSlider__list">
          {item.product_images.map(img => (
            <li className={cn(activeImage === img ? 'ProdSlider__list_item ProdSlider__list_item-active' : 'ProdSlider__list_item')}
                onClick={() => handleActiveImage(img)}>
              <img src={img} alt="" className="ProdSlider__list_item-image"/>
            </li>
          ))}
        </ul>
        <button className="ProdSlider__button">
          <img src="https://raw.githubusercontent.com/vitaliikorol/store_test_task/master/public/images/icons/up-arrow.png" alt="&larr;" className="ProdSlider__button ProdSlider__button_right"/>
        </button>
      </div>
    </section>
  )
}
