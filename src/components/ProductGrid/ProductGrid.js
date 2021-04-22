import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import AddProductDB from "./AddProductDB";
import FetchData from "../FetchData";
import { category } from "../Data/Data";

const ProductGrid = () => {
  let num = 0;
  const { docs } = FetchData("products"); //Fetch from db
  let { categoryType, itemType } = useParams(); //Fetch params from links
  console.log(categoryType, itemType, docs);
  const [prodId, setProdId] = useState("");
  const [uploadToCart, setUploadToCart] = useState(false);
  const [cart, setCart] = useState({});

  const addProduct = (id) => {
    setProdId(id);
    // setUploadToCart(true);
    alert("Adding " + id);

    if (cart.hasOwnProperty(id)) {
      setCart(cart[id] + 1);
    } else {
      setCart();
    }
    console.log(cart);
    // localStorage.setItem("userCart", cart);
    // console.log(localStorage.getItem("userCart"), cart);
  };

  return (
    <>
      {uploadToCart && (
        <AddProductDB id={prodId} resetAdded={setUploadToCart}></AddProductDB>
      )}
      <Nav
        typeCategories={category.typeImgs}
        brandCategories={category.brandImgs}
        navShow={{
          typeCat: true,
          brandCat: true,
          cart: false,
        }}
      />
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
                    <div class="card">
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
                            className={`btn btn-success
                            ${
                              localStorage.getItem("userName") === "User"
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
