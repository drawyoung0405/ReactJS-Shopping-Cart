import React from 'react'
import { useAppContext } from "../contexts/AppContext"
import Button from "./Button"
import ImageSimple from "./ImageSimple";
function ProductItem() {
  const { products } = useAppContext();
  return (
    <>
      {
        products.map((item) => {
          return (
            <div key={item.id} className="shopItem">
              <div className="shopItem_image">
                <ImageSimple
                src = {item.image}
                title = ''
                alt = ''
                />             
                 </div>
              <div className="shopItem_name">{item.name}</div>
              <div className="shopItem_description">The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.</div>
              <div className="shopItem_bottom">
                <div className="shopItem_price">$108.97</div>
                <div className="shopItem_button">
                  <Button text='Added'
                    bgColor="transparent"
                  />
                </div>
              </div>
            </div>
          )
        })
      }
    </>

  )
}

export default ProductItem
