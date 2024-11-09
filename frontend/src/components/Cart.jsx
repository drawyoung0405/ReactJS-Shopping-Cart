// import React from 'react'

import ImageSimple from "./ImageSimple"

function Cart() {
  return (
    <>
      <div className="cardTop">
        <ImageSimple
          title="Icon"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>Total: 1</div>
      </div>
      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">$71.97</span>
      </div>
    </>
  )
}

export default Cart
