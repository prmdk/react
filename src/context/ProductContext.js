import { createContext, useContext } from "react";
import useApi from "../hooks/useApi";
import { useCategoryContext } from "./CategoryContext";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const { selectedCategory } = useCategoryContext();
  const { isLoading, data, loadError } = useApi(
    `https://fakestoreapi.com/products/category/${selectedCategory}`
  );

  return (
    <ProductsContext.Provider
      value={{
        isLoading,
        data,
        loadError
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
