import "./Header.css";
import { useState } from "react";

import { Link } from "react-router-dom";

function Header() {
  const [isLogged, setIsLogged] = useState(false); // Replace with your login state
  const [role, setRole] = useState(""); // Replace with your user role
  const [cartCount, setCartCount] = useState(0); // Replace with your cart count state
  const [user, setUser] = useState({}); // Replace with your user data

  // Function to handle the login state
  const handleLogin = () => {
    // Implement your login logic here
    setIsLogged(true);
    // Set user data and role based on your authentication
    setUser({ photoUri: "user-photo.jpg" });
    setRole("ADMIN"); // Example role for testing, replace with actual user role
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    setIsLogged(false);
    // Clear user data
    setUser({});
    setRole("");
  };

  return (
    <header className="bg-white">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light p-0"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <a
            href="/!"
            className="navbar-brand align-items-center link-body-emphasis text-decoration-none"
          >
            <img src="src/assets/pnc.png" alt="logo image" width="50" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={parseInt("-1")}
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <a
                href="/!"
                className="navbar-brand align-items-center link-body-emphasis text-decoration-none"
              >
                <img
                  src="assets/pnc.png"
                  alt="logo image"
                  width="50"
                  height="50"
                />
              </a>
              <button
                type="button"
                className="btn-close btn-close-black"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              {/* Navbar links */}
              <ul className="navbar-nav me-auto p-1">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Restaurant
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Delivery
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fast Food
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Chinese
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Electricians
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Home Cleaners
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Plumbers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Automobile Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Auto Repair
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Car Wash
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item" href="#">
                        Parking
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Search form */}
              <form className="d-flex m-auto m-1" role="search">
                <input
                  className="form-control m-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success m-2" type="submit">

                  Search
                </button>
              </form>
              {/* Login and user actions */}
              {!isLogged && (
                <div className="d-flex m-1">
                  <Link to="/login">
                    <button className="btn btn-success m-1">
                      <i className="fa-solid fa-right-to-bracket mx-1"></i>
                      Login
                    </button>
                  </Link>
                
                <button className="btn btn-success m-1" /* Handle signup */>
                  <i className="fa-solid fa-database mx-1"></i>
                  Sign up
                </button>
              </div>
              
              )}
              {isLogged && (
                <div className="d-flex flex-end gap-2 mt-2">
                  {/* User-specific actions */}
                  {/* ... */}
                  <button
                    className="btn btn-outline-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
