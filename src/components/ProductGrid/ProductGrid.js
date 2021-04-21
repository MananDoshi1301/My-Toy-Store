import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import FetchData from "../FetchData";
import { category } from "../Data/Data";
import ProductCard from "./ProductCard/ProductCard";

const ProductGrid = () => {
  const { docs } = FetchData("products"); //Fetch from db
  let { categoryType, itemType } = useParams(); //Fetch params from links
  // console.log(categoryType, itemType, docs);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let tempProducts = [];
    for (let i = 0; i < docs.length; i++) {
      if (docs[i].file[categoryType] === itemType) {
        let obj = docs[i].file;
        tempProducts.push(obj);
        console.log(tempProducts);
      }
    }
    console.log(tempProducts);
    setProducts(tempProducts);
  }, [itemType]);

  return (
    <>
      <Nav categories={category.typeImgs} />
      <div className={`container-fluid my-5`}>
        <ProductCard products={products} />
      </div>
    </>
  );
};

export default ProductGrid;
