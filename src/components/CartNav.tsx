// import React from 'react';
import { TfiTrash } from 'react-icons/tfi';

import Button from './Button';
import React from 'react';

type CartOpen = {
  cartOpen: boolean;
  handleCartOpen: () => void;
};
const CartNav: React.FC<CartOpen> = ({ cartOpen }) => {
  return (
    <section
      className={`bg-[#fff] fixed ${
        cartOpen ? 'top-[6rem]' : 'top-[-100%]'
      }  z-10 right-0 left-0 mx-2 py-[2rem] px-6 flex flex-col justify-center gap-[2rem] rounded-lg`}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[1.2rem] font-bold">Cart</h1>
        <hr />
      </div>
      <div className="flex gap-[.7rem]">
        <figure>
          <img
            src="/assets/image-product-1.jpg"
            alt="image"
            className="h-[60px] rounded-lg"
          />
        </figure>
        <h2 className="flex flex-row items-center gap-[1.5rem]">
          <div className="flex flex-col gap-1">
            <span className="text-[#6B6E74] ">
              Fall Limited Edition Sneakers
            </span>
            <span className="flex gap-2">
              <p className="text-[#6B6E74]">$125.00 x 3 </p>
              <b>$375.00</b>{' '}
            </span>
          </div>

          <TfiTrash />
        </h2>
      </div>
      <Button text="Checkout" />
    </section>
  );
};

export default CartNav;
