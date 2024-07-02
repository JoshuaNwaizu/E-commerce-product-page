// import React from 'react';
import { TfiTrash } from 'react-icons/tfi';
import { useShoes } from '../contexts/ShoeContext';

import Button from './Button';
import React from 'react';

const CartNav: React.FC = () => {
  const { count, addCart, cartOpen, cartItems, handleDelete, handleCheckout } =
    useShoes();

  return (
    <section
      className={`bg-[#fff] shadow-lg fixed ${
        cartOpen ? 'top-[6rem] min-[768px]:top-[5rem]' : 'top-[-100%]'
      }  z-10 right-0 max-sm:left-0 mx-2 py-[2rem] px-6 flex flex-col justify-center gap-[2rem] rounded-lg`}
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[1.2rem] font-bold">Cart</h1>
        <hr />
      </div>
      {addCart ? (
        <>
          {cartItems.map((item, i) => (
            <>
              {' '}
              <div
                key={i}
                className="flex gap-[.7rem]"
              >
                <figure>
                  <img
                    src="/assets/image-product-1.jpg"
                    alt="image"
                    className="h-[60px] rounded-lg"
                  />
                </figure>
                <h2 className="flex flex-row items-center gap-[1.5rem]">
                  <div className="flex flex-col gap-1">
                    <span className="text-[#6B6E74] ">{item.name}</span>
                    <span className="flex gap-2">
                      <p className="text-[#6B6E74]">
                        ${item.price} x {count}{' '}
                      </p>
                      <b>${item.price * count}</b>{' '}
                    </span>
                  </div>

                  <TfiTrash
                    className="text-2xl text-[#6B6E74] cursor-pointer"
                    onClick={handleDelete}
                  />
                </h2>
              </div>
              <Button
                text="Checkout"
                onClick={handleCheckout}
              />
            </>
          ))}
        </>
      ) : (
        <span className="flex items-center justify-center my-[4rem] min-[768px]:mx-[5.5rem]">
          <p className="font-bold text-[#6B6E74]">Your cart is empty.</p>
        </span>
      )}
    </section>
  );
};

export default CartNav;
