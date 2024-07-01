import Button from './Button';
import { useShoes } from '../contexts/ShoeContext';

const Info = () => {
  const { count, handleItemAdd, handleItemMinus, handleAddCart } = useShoes();

  return (
    <section className="mx-6 my-[2rem] min-[768px]:mx-[3rem] min-[1100px]:flex min-[1100px]:justify-center min-[1100px]:w-[40svw] min-[1100px]:my-0 min-[1100px]:mx-0  ">
      <article className="flex flex-col gap-6  min-[1100px]:justify-center min-[1100px]:gap-[2rem]">
        <h2 className="flex flex-col gap-4">
          <span className="text-[#6B6E74] uppercase tracking-widest font-bold text-[12px] min-[768px]:text-center min-[768px]:text-[1.1rem] min-[1100px]:text-left">
            Sneaker Company
          </span>
          <span className="text-[#1E2023] text-3xl font-bold min-[768px]:text-center min-[768px]:text-3xl min-[1100px]:text-left">
            Fall Limited Edition Sneakers
          </span>
          <span className="text-[#6B6E74] min-[768px]:text-center min-[768px]:text-[1.1rem] min-[1100px]:text-left">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </span>
        </h2>

        <div className="flex items-center justify-between min-[768px]:item-center min-[768px]:justify-center min-[768px]:gap-[5rem] min-[1100px]:justify-start min-[1100px]:flex-col min-[1100px]:gap-0 min-[1100px]:items-start">
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
        <div className="flex flex-col gap-4 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-center min-[768px]:gap-[2rem] min-[1100px]:items-start min-[1100px]:justify-start">
          <div className="flex items-center justify-between bg-[#F7F8FD] px-7 py-4 rounded-lg min-[768px]:w-[12rem] ">
            <button
              onClick={handleItemMinus}
              className="p-2 cursor-pointer"
            >
              <img
                src="/assets/icon-minus.svg"
                alt="minus icon"
              />
            </button>
            <span className="font-bold text-[1.1rem]">{count}</span>
            <button
              onClick={handleItemAdd}
              className="p-2 cursor-pointer"
            >
              <img
                src="/assets/icon-plus.svg"
                alt="minus icon"
              />
            </button>
          </div>
          <Button
            text="Add to cart"
            onClick={handleAddCart}
          />
        </div>
      </article>
    </section>
  );
};

export default Info;
