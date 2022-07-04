import React from "react";
import { useCategoryContext } from "../context/CategoryContext";

function Category({ category }) {
  const { setSelectedCategory } = useCategoryContext();
  return (
    <div onClick={() => setSelectedCategory(category)} className="header-item">
      {category}
    </div>
  );
}

export default Category;
