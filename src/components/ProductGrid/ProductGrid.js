import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Nav";
import FetchData from "../FetchData";
import Footer from "../Footer";
import { category } from "../Data/Data";
import { motion } from "framer-motion";
import styles from "../component.module.css";
import SearchListNav from "./SearchListNav";
import Alert from "../Alert";

const ProductGrid = ({ cartItems, setCartItems }) => {
  let num = 0;
  let { docs } = FetchData("products"); //Fetch from db
  let { categoryType, itemType } = useParams(); //Fetch params from links
  const [prodId, setProdId] = useState("");
  const [searchlist, setSearchList] = useState([]);
  const [error, setError] = useState({
    title: "",
    text: "",
    state: "",
    showError: false,
  });

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
    // alert("Product Added Successfully");
    setError({
      ...error,
      showError: true,
      title: "Success!",
      text: "Product Added To Cart!",
      state: "success",
    });
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
        listArr.splice(10);
      }
      setSearchList(listArr);
      console.log(arr, listArr);
    } else {
      setSearchList([]);
    }
  };

  const setItems = (docs, category = null) => {

    if (category != null) {
      if (category === 'name') {
        docs.sort((a, b) => {
          return a["file"]["prodName"] - b["file"]["prodName"];
        })
      }
      else if (category === 'price') {
        docs.sort((a, b) => {
          return parseInt(a["file"]["prodPrice"]) - parseInt(b["file"]["prodPrice"]);
        })
      }
    }

    const items = docs
      .filter((doc) => {
        return doc.file[categoryType] == itemType;
      })
      .map((product) => {
        return (
          <div class="col w-25">
            <motion.div
              class="card shadow-lg p-3 mb-5 bg-body"
              whileHover={{ scale: 1.1, zIndex: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link to={`/product/${categoryType}/${itemType}/${product["id"]}`} style={{ textDecoration: "none" }}>
                <img
                  src={product.url}
                  class="card-img-top img-fluid"
                  alt={product.file.prodName}
                />
                <div class="card-body">
                  <h5 class="card-title text-dark fw-bold">{product.file.prodName}</h5>

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
                </div>
              </Link>
              {/* </div> */}
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
            </motion.div>
          </div>
        );
      });

    return items;
  };

  return (
    <>
      {error["showError"] && <Alert error={error} setError={setError} />}
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

      <SearchListNav searchlist={searchlist} handleSearch={handleSearch} setItems={setItems}
        docs={docs} />

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
      <Footer />
    </>
  );
};

export default ProductGrid;
