import React from 'react'

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger fs-4">
        <div class="container-fluid">
          <a class="navbar-brand fs-1 fw-bold" href="#">
            MyToyStore
            </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ms-5">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Games And Links
                    </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                        </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                        </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                        </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav
