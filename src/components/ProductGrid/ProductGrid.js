import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import FetchData from "../FetchData";
import { category } from "../Data/Data";

const ProductGrid = () => {
  const { docs } = FetchData("products"); //Fetch from db
  let { categoryType, itemType } = useParams(); //Fetch params from links
  console.log(categoryType, itemType, docs);

  return (
    <>
      <Nav categories={category.typeImgs} />
      <div className="container my-5">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {docs &&
            docs
              .filter((doc) => {
                return doc.file[categoryType] === itemType;
              })
              .map((product) => {
                return (
                  <div class="col">
                    <div class="card h-100">
                      <img
                        src={product.url}
                        class="card-img-top img-fluid"
                        alt={product.file.prodName}
                      />
                      <div class="card-body">
                        <h5 class="card-title">{product.file.prodName}</h5>
                        <a href="#" class="btn btn-primary">
                          Add To Cart
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
