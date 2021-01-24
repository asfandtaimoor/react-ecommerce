import React from "react";
import "./Navbar.style.css"; // Styles

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <p className="navbar-brand">Pak Express</p>
      </div>
      <div>
        <i class="fas fa-cart-plus"></i>
        <span class="badge rounded-pill ">0</span>
      </div>
    </div>
  );
};

export default Navbar;
