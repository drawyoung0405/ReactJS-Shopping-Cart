import React from 'react'
import { dataCart } from '../mocks/dataCart'
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [products] = React.useState(dataCart);
    // const [carts, setCarts] = React.useState([]);

    return (
        <AppContext.Provider
            value={{
                products,
            }}

        >
            {children}
        </AppContext.Provider>

    )
}

export const useAppContext = () => React.useContext(AppContext);
