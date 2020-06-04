import React, {useContext, useEffect, useState} from "react";
import './cart.scss'
import {cartIcon, closeIcon, ClothesFromServer} from "../Additional/api";
import {ClothItem} from "../Additional/Interfaces";
import {CartItem} from "./CartItem/cartItem";

export const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartGoods, setCartGoods] = useState([]);
  const goodsFromServer = useContext(ClothesFromServer);
  const [total, setTotal] = useState(730);
  const handleShowCart = () => {
    setShowCart(prevState => !prevState)
  }

  useEffect(() => {
    goodsFromServer.then(data => data
      .filter((el: ClothItem) => el.popularity % 2))
      .then(data => setCartGoods(data))
  }, [goodsFromServer])


  return (
    <>
      <button
        type="button"
        className="Cart link-styling"
        onClick={handleShowCart}
      >
        <img src={cartIcon}
             alt="cart"
             className="Cart__logo"
        />
        <span className="Cart__quantity">
          {cartGoods.length}
        </span>
      </button>
      <aside
        className="Cart__body"
        style={{top: showCart ? "calc(50vh - 41px)" : "calc(-50vh - 41px)"}}
      >
        <div className="Cart__body_close cbc">
          <button
            type="button"
            onClick={handleShowCart}
            className="cbc__button"
          >
            <img
              src={closeIcon}
              alt="close"
              className="cbc__button_img"
            />
          </button>
        </div>
        <div className="Cart__body_goods">
          {cartGoods.map((item: ClothItem) => (
            <CartItem
              total={total}
              setTotal={setTotal}
              cloth={item}
              key={item.article_no}
            />
          ))}
        </div>
        <div className="Cart__body_total">
          <p>Итого</p>
          <p>{`$${total}`}</p>
        </div>
        <button
          type="button"
          className="Cart__body_buy"
        >
          Купить
        </button>
      </aside>
    </>
  )
}
