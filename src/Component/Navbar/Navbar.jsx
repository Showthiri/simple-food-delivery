import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ cart }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [active, setActive] = useState("navbar");
  const [transparent, setTransparent] = useState('header');

  // Show Navbar when hamburger menu is clicked
  const showNav = () => {
    setActive("navbar activeNavbar");
  };

  // Remove Navbar when close button is clicked
  const removeNav = () => {
    setActive("navbar");
  };

  // Update header background on scroll
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };

  // Event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', addBg);
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []);

  // Handle click event for cart items
  const handleLinkClick = () => {
    console.log('Cart clicked:', cart.length); 
    setActive("navbar"); // Close navbar when link is clicked
  };

  // Close navbar when any NavLink is clicked
  const handleNavLinkClick = () => {
    setActive("navbar"); // Close navbar
  };

  return (
    <section className="navbarsection">
      <div className={transparent}>
        <div className="logodiv w-50">
          <a href="/" className="logo">
            <h4>F00D</h4>
          </a>
        </div>

       

        <div className={active}>
          <ul className="navlists">
            <li className="navitem">
              <NavLink to="/" className="navlink" exact onClick={handleNavLinkClick}>
                HOME
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink to="/Offer" className="navlink" onClick={handleNavLinkClick}>
                OFFER
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink to="/Foodorder" className="navlink" onClick={handleNavLinkClick}>
                FOOD ORDER
              </NavLink>
            </li>

  
            {cart.length > 0 && (
              <li>
                <NavLink to="/cart" className="navlink" onClick={handleLinkClick}>
                  <span className="cart-count">{cart.length}</span> VIEW CART
                </NavLink>
              </li>
            )}
            <li>
              <Link to="/sig">
                <button className="btn btn-warning">Sign up</button>
              </Link>
            </li>
            <li>
              <Link to="/logi">
                <button className="btn btn-warning">Login</button>
              </Link>
            </li>
          </ul>

          <div onClick={removeNav} className="closebar">
            <img
              src="https://img.icons8.com/?size=100&id=71200&format=png&color=000000"
              alt="close"
              height="32px"
            />
          </div>
        </div>
          
        
        <div onClick={showNav} className="toggleNavbar">
        {cart.length > 0 && (
          <h5 className="cart-coun" onClick={handleLinkClick}>
            {cart.length}
          </h5>
        )}

          <img
            src="https://img.icons8.com/?size=100&id=82749&format=png&color=000000"
            alt="toggle"
            height="32px"
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
