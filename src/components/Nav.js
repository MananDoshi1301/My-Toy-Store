import React, { useState } from "react";
import { Link } from "react-router-dom";
import FetchData from "./FetchData";

const Nav = (props) => {
  const [name, setName] = useState(localStorage.getItem("userName"));

  const { docs } = FetchData("products");

  // console.log(docs);

  const computeCart = () => {
    console.log(props.cartItems);
    let items = []
    for (let i=0; i<docs.length; i++){
      if(props.cartItems.includes(docs[i].id)){
        items.push({'id':docs[i].id,'doc':docs[i], 'total':0});
      }
    }
    for(let i=0; i< items.length; i++){
      let id = items[i]["id"];
      let num = 0;
      // console.log(id, , num);
      for(let j=0; j<props.cartItems.length; j++){
        if(id === props.cartItems[j]){
          num++;
        }
      }
      items[i]["total"] = num;
    }
    console.log(items);

  }


  const category = props.typeCategories.map((category) => (
    <li>
      <Link to={`/product/prodType/${category.Name}`}>
        <a className="dropdown-item fs-2 fw-bold">{category.Name}</a>
      </Link>
    </li>
  ));

  const brandCategory = props.brandCategories.map((category) => (
    <li>
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

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fs-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-1 fw-bold">
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

          <div classNameName="d-flex">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav d-flex justify-space-between">
                {/* Cart ----------------------------------------------------- */}
                {name != "User" && props.navShow.cart && (
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
                        class="bi bi-cart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </a>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            {<div class="list-group">
                              <div class="list-group-item list-group-item-action" aria-current="true">
                                <div class="d-flex w-100 justify-content-between">
                                  <h5 class="mb-1">List group item heading</h5>
                                  {/* <small>3 days ago</small> */}
                                </div>
                                <p class="mb-1">Some placeholder content in a paragraph.</p>
                                <small>And some small print.</small>
                              </div>                              
                            </div>}
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {/* =========================================================== */}

                {/* Username--------------------------------------------------- */}
                <li className="nav-item order-2 d-flex align-items-center">
                  {/* {user.name==="User" && } */}
                  {localStorage.getItem("userName") === "User" ? (
                    logSignUpDropDown
                  ) : (
                    <a className="navbar-brand fs-4 fw-bold">
                      Hello {localStorage.getItem("userName")}!
                    </a>
                  )}
                </li>
                {/* =========================================================== */}

                {/* DropDown -------------------------------------------------- */}
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
                {/* ========================================================== */}

                {/* DropDown -------------------------------------------------- */}
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
                      className="dropdown-menu bg-primary border border-5 border-dark"
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
              {name != "User" && (
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
