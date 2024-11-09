import React from 'react';

import { dataCart } from '../mocks/dataCart';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products] = React.useState(dataCart);
  const [carts, setCarts] = React.useState([]);

  function addToCart(productId) {
    const productItem = products.find(item => item.id === productId);
    console.log(productItem.price)
    console.log(products[0].price)
    if(!productItem) return;
    const item = {
      ...productItem,
      quanlity: 1
    }
    productItem.isSelected=true;
    setCarts(prevState => [...prevState, item])
  }


  function deleteCart(productId) {
    const newCarts = carts.filter(item => item.id !== productId);
    updateSelected(productId);
    setCarts(newCarts)
  }

  function updateSelected(productId){
    const productItem = products.find(item => item.id === productId);
    productItem.isSelected=false;
  }


  function plusProduct(productId) {
    const newCarts = [...carts];
    const productIndex = newCarts.findIndex(item => item.id === productId);
    newCarts[productIndex].quanlity = newCarts[productIndex].quanlity + 1;
    setCarts(newCarts);
  }


  function minusProduct(productId) {
    const newCarts = [...carts];
    const productIndex = newCarts.findIndex(item => item.id === productId);
    const currentQuanlity = newCarts[productIndex].quanlity;
    if(currentQuanlity === 1) {
      newCarts.splice(productIndex, 1);
      updateSelected(productId);
    } else {
      newCarts[productIndex].quanlity = newCarts[productIndex].quanlity - 1;
    }
    setCarts(newCarts);
  }
  return ( 
    <AppContext.Provider
      value={{
        products,
        carts,
        addToCart,
        deleteCart,
        plusProduct,
        minusProduct
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);