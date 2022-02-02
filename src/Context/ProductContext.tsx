import React, { createContext } from 'react';
import {Product} from './Product';

type ProductContextProviderProps = {
    children:React.ReactNode
}

export const ProductContext = createContext(Product);

export const ProductContextProvider = ({children,}: ProductContextProviderProps) => {
    return(
        <ProductContext.Provider value={Product}>
            {children}
        </ProductContext.Provider>
    )
}