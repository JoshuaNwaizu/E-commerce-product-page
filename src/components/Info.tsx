import { useState } from 'react';
import Button from './Button';

const Info = () => {
  const [itemCount, setItemCount] = useState<number>(0);

  const handleItemAdd = () => {
    setItemCount((count) => count + 1);
  };
  const handleItemMinus = () => {
    setItemCount((count) => Math.max(count - 1, 0));
  };
  return (
    <section className="mx-6 my-[2rem]">
      <article className="flex flex-col gap-6">
        <h2 className="flex flex-col gap-4">
          <span className="text-[#6B6E74] uppercase tracking-widest font-bold text-[12px]">
            Sneaker Company
          </span>
          <span className="text-[#1E2023] text-3xl font-bold">
            Fall Limited Edition Sneakers
          </span>
          <span className="text-[#6B6E74]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </span>
        </h2>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-6 font-bold">
            <p className="text-[#1E2023] text-[1.6rem] ">$125.00</p>
            <p className="text-[#fff] bg-[#1E2023] px-3 py-1 rounded-md text-[1.05rem]">
              50%
            </p>
          </span>
          <p className="text-[#6B6E74] text-[1.1rem] font-bold line-through">
            $250.00
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between bg-[#F7F8FD] px-7 py-4 rounded-lg">
            <button
              onClick={handleItemMinus}
              className="p-2"
            >
              <img
                src="/assets/icon-minus.svg"
                alt="minus icon"
              />
            </button>
            <span className="font-bold text-[1.1rem]">{itemCount}</span>
            <button
              onClick={handleItemAdd}
              className="p-2"
            >
              <img
                src="/assets/icon-plus.svg"
                alt="minus icon"
              />
            </button>
          </div>
          <Button text="Add to cart" />
        </div>
      </article>
    </section>
  );
};

export default Info;