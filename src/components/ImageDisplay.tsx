// import { useState } from 'react';

const ImageDisplay = () => {
  // const [checkClicked, isCheckedClicked] = useState<string>('');

  const handlePrev = () => {
    console.log('Previous');
  };
  const handleNext = () => {
    console.log('Next');
  };
  return (
    <section className="mt-[3.5rem] relative">
      <figure>
        <img
          src="/assets/image-product-1.jpg"
          alt=""
          className="h-[100svw] w-[100svw]"
        />
      </figure>
      <div className="flex absolute top-[44%] items-center justify-between w-[100svw] px-4">
        <button
          className="bg-[white] px-[1.2rem] py-[1.05rem] rounded-full"
          onClick={handlePrev}
        >
          <img
            src="/assets/icon-previous.svg"
            alt="icon next"
            className="h-[1rem]"
          />
        </button>
        <button
          className="bg-[white] px-[1.2rem] py-[1.05rem] rounded-full"
          onClick={handleNext}
        >
          <img
            src="/assets/icon-next.svg"
            alt="icon prev"
            className="h-[1rem]"
          />
        </button>
      </div>
    </section>
  );
};

export default ImageDisplay;
