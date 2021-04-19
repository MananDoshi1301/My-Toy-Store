import React from 'react'

const Nav = ( props ) => {

  const category = props.categories.map(category =>
    <li>
      <a className="dropdown-item fs-2 fw-bold">
        {category.Name}
      </a>
    </li>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fs-4">
        <div className="container-fluid">
          <a className="navbar-brand fs-1 fw-bold">
            MyToyStore
            </a>

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
                <li className="nav-item order-1 mx-4"> 
                  <a className="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg></a>
                </li>
                {/* =========================================================== */}

                {/* Username--------------------------------------------------- */}
                <li className="nav-item order-2 mx-4 d-flex align-items-center">
                  <a className="navbar-brand fs-4 fw-bold">Hello {props.name}!</a>
                </li>
                {/* =========================================================== */}

                {/* DropDown -------------------------------------------------- */}
                <li className="nav-item dropdown">
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
              </ul>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav
