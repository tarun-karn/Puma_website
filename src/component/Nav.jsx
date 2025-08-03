import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/image/logo.png" alt="logo" />
        </div>
        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Nav;
