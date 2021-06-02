import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlaceOrder from "./Dashboard/PlaceOrder";
import Alert from "./Alert";
import FetchData from "./FetchData";
import styles from "./component.module.css";

const Nav = (props) => {
  const [name, setName] = useState(localStorage.getItem("userName"));
  let [cart, setCart] = useState([]);
  const [cartModal, setCartModal] = useState(null);
  let [price, setPrice] = useState(0);
  const [finalOrder, setFinalOrder] = useState({});
  const [placeOrder, setPlaceOrder] = useState(false);
  const [showCartPrice, setShowCartPrice] = useState(false);
  const [error, setError] = useState({
    title: "",
    text: "",
    state: "",
    showError: false,
  });
  const { docs } = FetchData("products");

  // console.log(docs);

  const finalizeCart = () => {
    let item = [];
    for (let i = 0; i < cart.length; i++) {
      // let obj = "item " + i;
      item.push(cart[i]["doc"], cart[i]["total"]);
    }
    setFinalOrder({
      orderCost: price,
      userId: localStorage.getItem("userId"),
      order: item,
    });
    console.log(finalOrder);
  };

  const computeCart = () => {
    // console.log(props.cartItems, "priceChanged");
    let items = [];
    for (let i = 0; i < docs.length; i++) {
      if (props.cartItems.includes(docs[i].id)) {
        items.push({ id: docs[i].id, doc: docs[i], total: 0 });
      }
    }
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      let id = items[i]["id"];
      let num = 0;
      // console.log(id, , num);

      for (let j = 0; j < props.cartItems.length; j++) {
        if (id === props.cartItems[j]) {
          num++;
        }
      }
      items[i]["total"] = num;
    }
    setCart(items);
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i]["total"] * items[i]["doc"]["file"]["prodPrice"];
    }

    console.log(sum);
    setPrice(sum);
  };

  const removeItem = (id) => {
    const index = props.cartItems.indexOf(id);
    if (index > -1) {
      props.cartItems.splice(index, 1);
    }
    computeCart();
  };

  const addItem = (id) => {
    let items = props.cartItems;
    items.push(id);
    computeCart();
  };

  useEffect(() => {
    if (props.cartItems.length === 0) {
      setCartModal(
        <div className={`display-3 text-center text-light fw-bold d-flex justify-content-center align-items-center`}>
          <span>No Items to CheckOut!</span>
        </div>
      );
    } else {
      setCartModal(
        cart.map((obj, key) => {
          return (
            <div key={key}
              className="list-group-item list-group-item-action d-flex justify-content-between "
              aria-current="true"
            >
              <div className="d-flex w-100">
                <div>
                  <h4 className="mb-1 text-secondary display-5 mb-4">
                    {obj["doc"]["file"]["prodName"]}
                  </h4>
                  {/*////*/}
                  <ul className="list-group list-group-flush my-3 fs-4">
                    <li className="list-group-item fs-6 text-info fw-bolder">
                      Brand: {obj["doc"]["file"]["prodBrand"]}
                    </li>
                    <li className="list-group-item fs-6 text-warning fw-bolder">
                      Color: {obj["doc"]["file"]["prodColor"]}
                    </li>
                    <li className="list-group-item fs-6 text-danger fw-bolder">
                      MRP: {obj["doc"]["file"]["prodPrice"]}/-
                    </li>
                  </ul>

                  <div
                    className="btn-group btn-group-sm ms-2"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        removeItem(obj["id"]);
                      }}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-warning">
                      {obj["total"]}
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => {
                        addItem(obj["id"]);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className={`ms-2 mt-2 fs-6`}>
                    Sub-total: {obj["total"] * obj["doc"]["file"]["prodPrice"]}.00/-
                  </div>
                </div>
              </div>
              <img
                src={obj["doc"]["url"]}
                className={`img-fluid w-25`}
                alt=""
              />
              {/* <small>And some small print.</small> */}
            </div>
          );
        })
      );
    }
  }, [cart]);

  useEffect(() => {
    if (price === 0) {
      setShowCartPrice(false)
    }
    else {
      setShowCartPrice(true);
    }
  }, [price])

  // DropDown category map
  const category = props.typeCategories.map((category, key) => (
    <li key={key}>
      <Link to={`/product/prodType/${category.Name}`}>
        <a className="dropdown-item fs-2 fw-bold">{category.Name}</a>
      </Link>
    </li>
  ));

  // brandcategory map
  const brandCategory = props.brandCategories.map((category, key) => (
    <li key={key}>
      <Link to={`/product/prodBrand/${category.Name}`}>
        <a className="dropdown-item fs-2 fw-bold">{category.Name}</a>
      </Link>
    </li>
  ));

  const logSignUpDropDown = (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle mx-3"
        id="navbarDropdownMenuLink1"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Hello User
      </a>
      <ul
        className="dropdown-menu bg-warning border border-5 border-dark"
        aria-labelledby="navbarDropdownMenuLink1"
      >
        <li>
          <Link to="/logSign" className="dropdown-item fs-5 fw-bold">
            LogIn/SignUp
          </Link>
        </li>
        <li>
          <Link to="/admin" className="dropdown-item fs-5 fw-bold">
            Admin
          </Link>
        </li>
      </ul>
    </li>
  );

  const imagelogedinDropDown = (
    <div className="dropdown me-4">
      <a className="navbar-brand dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={localStorage.getItem("userImg")}
          className={`rounded-circle border border-light border-3`} alt="" width="60" height="60" />
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start mt-2 border border-4 border-dark" aria-labelledby="dropdownMenuLink">
        <li>
          <h2 className="dropdown-header fs-4 fw-bold">
            <span className={`${styles.architectDaughters}`}>Hello {localStorage.getItem("userName")} !</span></h2>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <Link to={`/orderHistory/${localStorage.getItem("userId")}`} className="dropdown-item fs-5">
            Order History
          </Link>
        </li>
        <li><a className="dropdown-item fs-5"
          onClick={() => {
            const prevUser = {
              name: localStorage.getItem("userName"),
              id: localStorage.getItem("userId"),
              cart: props.cartItems,
            }
            localStorage.setItem("prevUser", JSON.stringify(prevUser));
            console.log(JSON.parse(localStorage.getItem("prevUser")));
            localStorage.setItem("userName", "User");
            localStorage.setItem("userId", "");
            localStorage.setItem("userCart", JSON.stringify([]));
            localStorage.setItem("userImg", "")
            props.setCartItems([]);
            setName("User");
          }}
        >LogOut</a>
        </li>
      </ul>
    </div>
  )

  return (
    <>
      {error["showError"] && <Alert error={error} setError={setError} />}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fs-4">
        <div className="container">
          <Link to="/" className={`navbar-brand fs-1 fw-bold ${styles.architectDaughters}`}>
            MyToyStore
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav d-flex justify-space-between">
                {/* Cart ----------------------------------------------------- */}
                {name !== "User" && props.navShow.cart && (
                  <li className="nav-item order-3 mx-2" onClick={computeCart}>
                    <a
                      className="nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="30"
                        fill="currentColor"
                        className="bi bi-cart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </a>

                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                          <div className="modal-header bg-warning">
                            <h5 className={`modal-title display-4 text-light fw-bolder ${styles.indieFlower}`} id="staticBackdropLabel">
                              My Cart
                            </h5>
                            <button
                              type="button"
                              className="btn-close me-3"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div
                            className=
                            {`modal-body bg-danger ${props.cartItems.length === 0 ? "d-flex justify-content-center align-items-center" : ""}`}>
                            <div className="list-group gap-3">{cartModal}</div>
                          </div>
                          <div className="modal-footer bg-warning">
                            {<div className={`${styles.marEnd} text-start fw-bold`}>
                              {props.cartItems.length === 0 ? "" : <span>Total: {price}.00/-</span>}
                            </div>}
                            <button
                              type="button"
                              className={`btn btn-lg btn-secondary ${props.cartItems.length === 0 ? `disabled` : ""
                                }`}
                              data-bs-dismiss="modal"
                              onClick={() => {
                                props.setCartItems([]);
                              }}
                            >
                              Clear Cart
                            </button>
                            <button
                              type="button"
                              className={`btn btn-lg btn-success ${props.cartItems.length === 0 ? `disabled` : ""
                                }`}
                              onClick={() => {
                                finalizeCart();
                                setPlaceOrder(true);
                                setCart([]);
                                props.setCartItems([]);
                                // setPrice(0);
                                computeCart();
                                setError(
                                  {
                                    ...error,
                                    showError: true,
                                    title: "Success!",
                                    text: "Order Placed Successfully!",
                                    state: "success",
                                  })
                              }}
                            >
                              Place Order
                            </button>
                            {placeOrder && (
                              <PlaceOrder
                                order={finalOrder}
                                setOrder={setFinalOrder}
                                setPlaceOrder={setPlaceOrder}

                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {/* =========================================================== */}

                {/* Username--------------------------------------------------- */}
                {props.navShow.user && (
                  <li className="nav-item order-2 d-flex align-items-center">
                    {/* {user.name==="User" && } */}
                    {localStorage.getItem("userName") === "User" ? (
                      logSignUpDropDown
                    ) : localStorage.getItem("userImg") !== "" ? (imagelogedinDropDown) :
                      <a className="navbar-brand fs-4 fw-bold">
                        Hello {localStorage.getItem("userName")}
                        {!localStorage.getItem("userImg") ? "!" : ""}
                      </a>
                    }
                  </li>
                )}
                {/* =========================================================== */}

                <li className="nav-item order-2 d-flex align-items-center">
                  {/* {imagelogedinDropDown} */}
                </li>

                {/* DropDown -------------------------------------------------- */}
                {props.navShow.typeCat && (
                  <li className="nav-item dropdown order-0">
                    <a
                      className="nav-link dropdown-toggle mx-3"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All Games And Toys
                    </a>
                    <ul
                      className="dropdown-menu bg-primary border border-5 border-dark"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      {/* Map here for categories display */}
                      {category}
                      {/* ============================== */}
                    </ul>
                  </li>
                )}
                {/* ========================================================== */}

                {/* DropDown Brand-------------------------------------------- */}
                {props.navShow.brandCat && (
                  <li className="nav-item dropdown order-1">
                    <a
                      className="nav-link dropdown-toggle mx-3"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      All Brands
                    </a>
                    <ul
                      className="dropdown-menu bg-info  border border-5 border-dark"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      {/* Map here for categories display */}
                      {brandCategory}
                      {/* ============================== */}
                    </ul>
                  </li>
                )}
                {/* ========================================================== */}
              </ul>
              {props.navShow.user && name !== "User" && localStorage.getItem("userImg") === "" && (
                <button
                  className={`btn btn-warning ms-3`}
                  onClick={() => {
                    localStorage.setItem("userName", "User");
                    localStorage.setItem("userId", "");
                    localStorage.setItem("userCart", JSON.stringify([]));
                    props.setCartItems([]);
                    setName("User");
                  }}
                >
                  LogOut
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
