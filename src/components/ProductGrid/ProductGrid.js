import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import FetchData from "../FetchData";
import { category } from "../Data/Data";
import { motion } from "framer-motion";

const ProductGrid = ({ cartItems, setCartItems }) => {
  let num = 0;
  let { docs } = FetchData("products"); //Fetch from db
  let { categoryType, itemType } = useParams(); //Fetch params from links
  const [prodId, setProdId] = useState("");
  const [searchlist, setSearchList] = useState([]);

  // console.log(categoryType, itemType, docs, cartItems);
  // console.log(docs);

  const LCS = (str1, str2) => {
    var rows = str1.split("");
    rows.unshift("");
    var cols = str2.split("");
    cols.unshift("");
    var m = rows.length;
    var n = cols.length;
    var dp = [];
    for (var i = 0; i < m; i++) {
      dp[i] = [];
      for (var j = 0; j < n; j++) {
        if (i === 0 || j === 0) {
          dp[i][j] = 0;
          continue;
        }

        if (rows[i] === cols[j]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    return dp[i - 1][j - 1];
  };

  const addProduct = (id) => {
    setProdId(id);
    alert("Product Added Successfully");
    setCartItems([...cartItems, id]);
  };

  const handleSearch = (e) => {
    let str = e.target.value;
    let docArray = [];
    if (str.length >= 2) {
      for (let count = 0; count < docs.length; count++) {
        let match = LCS(
          str.toLowerCase(),
          docs[count]["file"]["prodName"].toLowerCase()
        );
        let obj = { doc: docs[count], totalMatch: match };
        docArray.push(obj);
      }
      docArray.sort((a, b) => {
        return -a.totalMatch + b.totalMatch;
      });
      let arr = [],
        listArr = [];
      for (let count = 0; count < docArray.length; count++) {
        arr.push(docArray[count]["doc"]);
        if (docArray[count]["totalMatch"] >= str.length - 1) {
          listArr.push(docArray[count]["doc"]);
        }
      }
      if (listArr.length > 6) {
        listArr.splice(7);
      }
      setSearchList(listArr);
      console.log(arr, listArr);
    } else {
      setSearchList([]);
    }
  };

  const setItems = (docs) => {
    const items = docs
      .filter((doc) => {
        return doc.file[categoryType] == itemType;
      })
      .map((product) => {
        return (
          <div class="col">
            <motion.div
              class="card shadow-lg p-3 mb-5 bg-body rounded"
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
                ${localStorage.getItem("userName") === "User" ? `disabled` : ""}
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
      });

    return items;
  };

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
      <nav class="navbar navbar-light bg-warning">
        <div class="container">
          <div></div>
          <div class="">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            <motion.ul animate={{}} className="list-group">
              {searchlist &&
                searchlist.map((listItem) => {
                  return (
                    <li className="list-group-item list-group-item-action">
                      {listItem["file"]["prodName"]}
                    </li>
                  );
                })}
            </motion.ul>
          </div>
        </div>
      </nav>
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.3, duration: 1, stiffness: 130 }}
      >
        <div className="container my-5">
          <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
            {docs && setItems(docs)}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductGrid;
