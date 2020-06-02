import React, {useState} from "react";
import './cart.scss'

export const Cart = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(prevState => !prevState)
  }


  return (
    <>
      <button type="button" className="Cart" onClick={handleShowCart}>
        <img src="images/icons/cart.png" alt="cart" className="Cart__logo"/>
        <span className="Cart__quantity">1</span>
      </button>
      <aside className="Cart__body" style={{top: showCart ? "0" : "-100vh"}}>
        <div className="Cart__body_close cbc">
          <button type="button" onClick={handleShowCart} className="cbc__button">
            <img src="images/icons/close.png" alt="close" className="cbc__button_img"/>
          </button>
        </div>
        <button type="button" className="Cart__body_buy">Купить</button>
      </aside>
    </>
  )
}
