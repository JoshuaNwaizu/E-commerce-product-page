// import React from 'react'

const NavBar = () => {
  return (
    <header className="">
      <nav className="flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <span>
            <img
              src="/assets/icon-menu.svg"
              alt="menu"
            />
          </span>
          <span>
            <img
              src="/assets/logo.svg"
              alt="logo"
            />
          </span>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <img
            src="/assets/icon-cart.svg"
            alt="cart logo"
          />
          <img
            src="/assets/image-avatar.png"
            alt="Avatar image"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
