// import React from 'react'

import { useAppContext } from "../contexts/AppContext"
import ImageSimple from "./ImageSimple"

function Cart() {
  const{carts} = useAppContext();
  const total = carts.reduce((acc, curr) => acc += curr.price * (curr.quanlity || 1), 0);
  return (
    <>
      <div className="cardTop">
        <ImageSimple
          title="Icon"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: {carts.length}</div>
      </div>
      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">${Math.floor(total)}</span>
      </div>
    </>
  )
}

export default Cart
