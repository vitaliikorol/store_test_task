import React, {FC, useState} from "react";
import './cartItem.scss'
import {ClothItem} from "../../Additional/Interfaces";

type Params = {
  cloth: ClothItem;
  setTotal: (value: number) => void;
  total: number;
}

export const CartItem:FC<Params> = ({cloth, setTotal, total}) => {
  const [count, setCount] = useState(1);

  const handleMinusButton = () => {
    setCount(prevState => prevState === 0 ? prevState : prevState - 1)
    setTotal(total - cloth.price)
  }

  const handlePlusButton = () => {
    setCount(prevState => prevState < cloth.left_in_stock ? prevState + 1 : prevState);
    setTotal(total + cloth.price)
  }


  return (
    <div className="CartItem">
      <div className="CartItem__image_wrapper"><img src={cloth.product_images[1]} alt={cloth.name} className="CartItem__image"/></div>
      <div className="CartItem__specs">
        <p className="CartItem__specs_title">{cloth.name}</p>
        <div className="CartItem__specs_counter counter">
          <button disabled={count === 0} type="button" onClick={handleMinusButton} className="counter__button">-</button>
          <span className="counter__value">{count}</span>
          <button disabled={count === cloth.left_in_stock} type="button" onClick={handlePlusButton}  className="counter__button">+</button>
        </div>
      </div>
      <p className="CartItem__price">{`$${cloth.price*count}`}</p>
    </div>
  )
}
