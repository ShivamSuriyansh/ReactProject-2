// import { createContext, useState } from "react";
// import { createSearchParams } from "react-router-dom";

// import { getProductArray } from './your-file';




// import PRODUCTS from '../shop-data.json';


// export const ProductsContext = createContext({
//     product : [],
// });

// export const ProductsProvider = ({children})=>{
//     const [products , setProducts] = useState(PRODUCTS);
//     const value = {products};

    

//     return (
//         <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
//     );
// }

import { createContext, useState, useEffect } from "react";
import { getProductArray } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductArray()
      .then((product) => {
        setProducts(product); // Update the products state with the retrieved array
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
