import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import FetchData from "./FetchData";
import Footer from "./Footer";
import styles from "./component.module.css";
import { motion } from "framer-motion";

const GetOrders = () => {
  const userOrders = FetchData("userOrders").docs;
  // let docs = FetchData("products").docs;
  console.log(userOrders);
  // console.log(docs)
  let { userId } = useParams(); //Fetch params from links

  const orderDisplay = () => {
    userOrders.sort((a, b) => {
      return (
        -parseInt(a["orderDate"]["seconds"]) +
        parseInt(b["orderDate"]["seconds"])
      );
    });
    let Order = userOrders
      .filter((order) => {
        return order.userId === userId;
      })
      .map((order, key) => {
        let date = order["orderDate"].toDate();
        date = date.toString();
        date = date.split(" ");
        let quantity = order["order"].filter((subOrder) => {
          return Number.isInteger(subOrder);
        });
        return (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              delay: 0.3,
              duration: 1,
              stiffness: 130,
            }}
            className="container bg-warning p-3 border border-5 border-danger rounded"
          >
            <div className="d-flex justify-content-between my-3">
              <span
                className={`h5 bg-danger p-3 text-white border border-5 rounded-pill`}
              >
                Order Placed On: {date[1] + "-" + date[2] + " " + date[3] + " " + date[4]}
              </span>
              <span
                className={`text-end h5 bg-danger p-3 text-white border border-5 rounded-pill`}
              >
                Order Id: {order["id"]}
              </span>
            </div>
            {order["order"]
              .filter((subOrder) => {
                return !Number.isInteger(subOrder);
              })
              .map((subOrder, key) => {
                return (
                  <div className="card mb-3 border border-5">
                    <div className="row g-0">
                      <div className="col-md-4 text-center">
                        <img
                          src={`${subOrder["url"]}`}
                          alt={`${subOrder["file"]["prodName"]}`}
                          className={`w-50 `}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h4 className="card-title fs-3">
                            {subOrder["file"]["prodName"]}
                          </h4>
                          <ul className="list-group list-group-flush w-50">
                            <li className="list-group-item fs-5 text-danger fw-bold">
                              Brand: {subOrder["file"]["prodBrand"]}
                            </li>
                            <li className="list-group-item fs-5 text-primary fw-bold">
                              Color: {subOrder["file"]["prodColor"]}
                            </li>
                            <li className="list-group-item fs-5 fw-bold">
                              MRP: {subOrder["file"]["prodPrice"]} X{" "}
                              {quantity[key]}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div
              className={`h3 text-end bg-info p-3 text-white border border-5 border-primary rounded`}
            >
              Total MRP: {order["orderCost"]}/-
            </div>
          </motion.div>
        );
      });
    // console.log(Order);
    return Order;
  };

  return (
    <>
      <Nav
        typeCategories={[]}
        brandCategories={[]}
        navShow={{
          typeCat: false,
          brandCat: false,
          user: false,
          cart: false,
        }}
        cartItems={[]}
      />

      <div className={`pb-3`} style={{ backgroundColor: "#ececec" }}>
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            delay: 0.6,
            duration: 1,
            stiffness: 130,
          }}
          className="text-center py-4 pt-5"
        >
          <span
            className={`display-1 px-2 border border-5 border-danger rounded bg-warning fw-bold ${styles.architectDaughters}`}
          >
            {localStorage.getItem("userName").toUpperCase()}'s Order History
          </span>
        </motion.div>
        <div className="container py-3">
          <div className="order list-group gap-5">
            {userOrders && orderDisplay()}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GetOrders;
