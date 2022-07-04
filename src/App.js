import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CategoryProvider from "./context/CategoryContext";
import ProductsProvider from "./context/ProductContext";

import "./styles.css";

export default function App() {
  // selected component state here
  return (
    <CategoryProvider>
      <div className="App">
        <Header />
        <ProductsProvider>
          <ProductList />
        </ProductsProvider>
      </div>
    </CategoryProvider>
  );
}
