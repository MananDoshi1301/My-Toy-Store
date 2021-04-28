import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import FetchData from "../FetchData";
import { category } from "../Data/Data";
import { motion } from "framer-motion";

const ProductGrid = ({ cartItems, setCartItems }) => {
  let num = 0;
  const { docs } = FetchData("products"); //Fetch from db
  let { categoryType, itemType } = useParams(); //Fetch params from links
  const [prodId, setProdId] = useState("");

  // console.log(categoryType, itemType, docs, cartItems);
  console.log(categoryType, itemType, docs);

  const addProduct = (id) => {
    setProdId(id);
    alert("Product Added Successfully");
    setCartItems([...cartItems, id]);
  };

  const items = docs
    .filter((doc) => {
      return doc.file[categoryType] == itemType;
    })
    .map((product) => {
      return (
        <div class="col">
          <motion.div class="card shadow-lg p-3 mb-5 bg-body rounded"
            whileHover={{ scale: 1.2, zIndex: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={product.url}
              class="card-img-top img-fluid"
              alt={product.file.prodName}
            />
            <div class="card-body">
              <h5 class="card-title">{product.file.prodName}</h5>

              <ul class="list-group list-group-flush">
                {product.file.prodBrand && (
                  <li class="list-group-item text-muted fw-bolder">
                    Brand:&nbsp;
                    <span className={`text-danger`}>
                      {product.file.prodBrand}
                    </span>
                  </li>
                )}
                {product.file.prodPrice && (
                  <li class="list-group-item text-muted fw-bolder">
                    MRP:&nbsp;
                    <span className={`text-danger`}>
                      {product.file.prodPrice}/-
                    </span>
                  </li>
                )}
              </ul>
              <div className={`text-end`}>
                <button
                  className={`btn btn-outline-success
                ${localStorage.getItem("userName") === "User"
                      ? `disabled`
                      : ""
                    }
                `}
                  onClick={() => {
                    addProduct(product.id);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      );
    })

  return (
    <>
      <Nav
        typeCategories={category.typeImgs}
        brandCategories={category.brandImgs}
        navShow={{
          typeCat: true,
          brandCat: true,
          user: false,
          cart: true,
        }}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', delay: 0.3, duration: 1, stiffness: 130 }}
      >
        <div className="container my-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {docs && items}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductGrid;
