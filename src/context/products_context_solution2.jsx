import { createContext, useState } from "react";

import { dataForHomePage } from "../utils/constants";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(dataForHomePage);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

// not use this hook in the app
