import React, { useState } from 'react';

const navList: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];

type CartOpen = {
  handleCartOpen: () => void;
};
const NavBar: React.FC<CartOpen> = ({ handleCartOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleNav = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#fff]">
      <nav className="flex flex-row items-center justify-between mx-5 h-[5rem]">
        <div className="flex flex-row gap-4 r">
          <span
            className="cursor-pointer"
            onClick={handleToggleNav}
          >
            <img
              src="/assets/icon-menu.svg"
              alt="menu"
              className="w-[1.3rem] cursor-pointer"
            />
          </span>
          <span className="cursor-pointer">
            <img
              src="/assets/logo.svg"
              alt="logo"
            />
          </span>
          <div
            className={`w-[100svw] bg-[#0000009e] left-0 top-0 h-[100svh] absolute  ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <div
              className={`absolute bg-[#fff] w-[70svw] left-0 top-0 h-[100svh]  flex flex-col transition-all duration-300 ${
                isOpen ? 'left-0' : 'left-[-100%]'
              }`}
            >
              <span className="absolute top-[2rem] ml-6 flex flex-col gap-[3rem]">
                <span onClick={handleToggleNav}>
                  <img
                    src="/assets/icon-close.svg"
                    alt="Icon close"
                    className="cursor-pointer"
                  />
                </span>
                <ul className="flex flex-col gap-5">
                  {navList.map((list) => (
                    <li
                      key={list}
                      className="text-[1.1rem] font-bold cursor-pointer"
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span onClick={handleCartOpen}>
            <img
              src="/assets/icon-cart.svg"
              alt="cart logo"
            />
          </span>
          <img
            src="/assets/image-avatar.png"
            alt="Avatar image"
            className="w-[2rem]"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
