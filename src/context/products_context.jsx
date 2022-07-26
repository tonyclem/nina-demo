import React, { useContext, useReducer, useState } from "react";
import reducer from "../reducers/products_reducer";
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../action";

import { dataForHomePage } from "../utils/constants";

const initialState = {
  isSidebarOpen: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // eslint-disable-next-line
  const [products, setProducts] = useState(dataForHomePage);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, products }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
