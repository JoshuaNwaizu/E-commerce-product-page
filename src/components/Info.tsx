import Button from './Button';
import { useShoes } from '../contexts/ShoeContext';

const Info = () => {
  const { count, handleItemAdd, handleItemMinus, handleAddCart } = useShoes();

  return (
    <section className="mx-6 my-[2rem] min-[768px]:mx-[3rem]">
      <article className="flex flex-col gap-6 ">
        <h2 className="flex flex-col gap-4">
          <span className="text-[#6B6E74] uppercase tracking-widest font-bold text-[12px] min-[768px]:text-center min-[768px]:text-[1.2rem]">
            Sneaker Company
          </span>
          <span className="text-[#1E2023] text-3xl font-bold min-[768px]:text-center min-[768px]:text-4xl">
            Fall Limited Edition Sneakers
          </span>
          <span className="text-[#6B6E74] min-[768px]:text-center min-[768px]:text-[1.2rem]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </span>
        </h2>

        <div className="flex items-center justify-between min-[768px]:item-center min-[768px]:justify-center min-[768px]:gap-[5rem]">
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
        <div className="flex flex-col gap-4 min-[768px]:flex-row min-[768px]:items-center min-[768px]:justify-center min-[768px]:gap-[2rem]">
          <div className="flex items-center justify-between bg-[#F7F8FD] px-7 py-4 rounded-lg min-[768px]:w-[15rem]">
            <button
              onClick={handleItemMinus}
              className="p-2 "
            >
              <img
                src="/assets/icon-minus.svg"
                alt="minus icon"
              />
            </button>
            <span className="font-bold text-[1.1rem]">{count}</span>
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
