// import React from 'react'

import { useAppContext } from "../contexts/AppContext"
import ImageSimple from "./ImageSimple"

function Cart() {
  const{carts} = useAppContext();
  const totalPrice = carts.reduce((acc, curr) => acc += curr.price * (curr.quanlity || 1), 0);
  let totalQuanlity=0;
   carts.forEach((element) => totalQuanlity+=element.quanlity);
  return (
    <>
      <div className="cardTop">
        <ImageSimple
          title="Icon"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: {totalQuanlity}</div>
      </div>
      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">${Math.floor(totalPrice)}</span>
      </div>
    </>
  )
}


export default Cart
