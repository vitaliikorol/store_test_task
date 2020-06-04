import React, {FC, useState} from "react";
import {ClothItem} from "../Additional/Interfaces";
import cn from 'classnames';
import './productDescription.scss'
import {defineTypeOfCloth} from "../Additional/multipurposeFuncs";
import {up_arrowIcon} from "../Additional/api";

type Params = {
  item: ClothItem;
}

export const ProductDescription: FC<Params> = ({item}) => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const [size, setSize] = useState(0);

  const defineSliderVisible = () => {
    setSliderVisible(prevState => !prevState)
  }

  const defineSize = (size: number) => {
    setSize(size)
  }

  return (
    <div className="ProductDescription PD">
      <aside className="PD__picture">
        <img
          className="PD__picture_img"
          src={item.product_images[1]}
          alt={item.article_no}
        />
      </aside>
      <main className="PD__main">
        <button className="PD__main_button-back PD__btn">
          <img
            className="PD__btn_img"
            src={up_arrowIcon}
            alt="&larr;"/>
          НАЗАД
        </button>
        <p className="PD__main_type">{defineTypeOfCloth(item.type)}</p>
        <h1 className="PD__main_title">{item.name}</h1>
        <div className="PD__main_buttons">
          <div className="PD__main_buttons_list-wrapper PDL">

            <button
              className="PDL__buttons"
              onClick={defineSliderVisible}
            >
              РАЗМЕР
              <img className="PDL__buttons_img"
                   src={up_arrowIcon}
                   alt="&larr;"
              />
            </button>
            <div className="PDL__buttons_list-wrapper">
              <ul className="PDL__buttons_list"
                  style={{top: sliderVisible
                      ? '0'
                      : `-${item.product_images.length * 30}px`}}
              >
                {item.sizes.map(el => (
                  <li
                    onClick={() => defineSize(el)}
                    key={el}
                    className={cn(size === el
                      ? 'PDL__buttons_item PDL__buttons_item-active'
                      : 'PDL__buttons_item')}
                  >
                    {el}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <button
            className="PDL__buttons PDL__buttons_cart"
            type="button"
          >
            В КОРЗИНУ
          </button>
        </div>
        <div className="PD__description">
          <div className="PD__description_text">
            <p className="PD__description_text-main">
              {item.description}
            </p>
            <p>{item.description_additional}</p>
          </div>
          <div className="PD__description_specs">
            <div className="PD__description_specs-item SPEC">
              <p className="SPEC__prop">ЦВЕТ:</p>
              <p className="SPEC__value">{item.color}</p>
            </div>
            <div className="PD__description_specs-item SPEC">
              <p className="SPEC__prop">СОСТАВ:</p>
              <p className="SPEC__value">{item.composition}</p>
            </div>
            <div className="PD__description_specs-item SPEC">
              <p className="SPEC__prop">УХОД:</p>
              <p className="SPEC__value">{item.care}</p>
            </div>
            <div className="PD__description_specs-item SPEC">
              <p className="SPEC__prop">АРТИКУЛ:</p>
              <p className="SPEC__value">{item.article_no}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
