import React, {FC, useState} from "react";
import {NavLink} from 'react-router-dom'
import './productCard.scss'
import {ClothItem} from "../Additional/Interfaces";
import cn from 'classnames';
import {defineTypeOfCloth} from "../Additional/multipurposeFuncs";
import {up_arrowIcon} from "../Additional/api";

type Params = {
  item: ClothItem,
}

export const ProductCard: FC<Params> = ({item}) => {
  const [activeImage, setActiveImage] = useState(item.product_images[0])
  const [sliderVisible, setSliderVisible] = useState(false)
  const index = item.product_images.findIndex(el => el === activeImage)

  const handleActiveImage = (imgUrl: string) => {
    setActiveImage(imgUrl)
  }

  const handlePrevButton = () => {
    index === 0
      ? setActiveImage(item.product_images[item.product_images.length - 1])
      : setActiveImage(item.product_images[index - 1])
  }

  const handleNextButton = () => {
    index + 1 === item.product_images.length
      ? setActiveImage(item.product_images[0])
      : setActiveImage(item.product_images[index + 1])
  }

  const defineMouseEnter = () => {
    setSliderVisible(true)
  }

  const defineMouseLeave = () => {
    setSliderVisible(false)
  }

  return (
    <section
      className="ProductCard"
      onMouseEnter={defineMouseEnter}
      onMouseLeave={defineMouseLeave}
    >
      <NavLink to={`/${item.article_no}`}>
        <img
          src={activeImage}
          alt={activeImage}
          className="ProductCard__image"
        />
      </NavLink>
      <div className="ProductCard__wrapper">
        <div
          className="ProductCard__slider ProdSlider"
        style={{opacity: sliderVisible ? '100%' : '0%'}}>
          <button
            onClick={handlePrevButton}
            className="ProdSlider__button">
            <img
              src={up_arrowIcon}
              alt="&larr;"
              className="ProdSlider__button ProdSlider__button_left"
            />
          </button>
          <ul className="ProdSlider__list">
            {item.product_images.map(img => (
              <li
                key={img}
                className={cn(activeImage === img
                  ? 'ProdSlider__list_item ProdSlider__list_item-active'
                  : 'ProdSlider__list_item')}
                onClick={() => handleActiveImage(img)}
              >
                <img src={img} alt="" className="ProdSlider__list_item-image"/>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNextButton}
            className="ProdSlider__button">
            <img
              src={up_arrowIcon}
              alt="&larr;"
              className="ProdSlider__button ProdSlider__button_right"/>
          </button>
        </div>
        <div className="ProductCard__description">
          <p
            className="ProductCard__description_type"
          >
            {defineTypeOfCloth(item.type)}
          </p>
          <p className="ProductCard__description_title">{item.name}</p>
        </div>
        <div className="ProductCard__price">
          <h1 className="ProductCard__price_value">{`$${item.price}`}</h1>
          <p
            className="ProductCard__price_stock"
          >
            {`на складе: ${item.left_in_stock}`}
          </p>
        </div>
      </div>
    </section>
  )
}
