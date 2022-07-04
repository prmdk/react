import { useEffect } from "react";
import { useCategoryContext } from "../context/CategoryContext";
import useApi from "../hooks/useApi";
import Category from "./Category";

function Header() {
  const { setSelectedCategory } = useCategoryContext();
  const { data, isLoading, loadError } = useApi(
    `https://fakestoreapi.com/products/categories/`
  );

  useEffect(() => {
    if (data) {
      setSelectedCategory(data[0]);
    }
  }, [data, setSelectedCategory]);

  if (isLoading) {
    return <div>Data is Loading</div>;
  } else if (loadError) {
    return <div>Load error {loadError.message} </div>;
  } else {
    return (
      <div className="header-items">
        {data.map((category, i) => {
          return <Category category={category} />;
        })}
      </div>
    );
  }
}

export default Header;
