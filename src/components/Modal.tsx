import { useModal } from '../contexts/ImageContext';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = () => {
  const {
    shoeData,
    image,
    handleBackward,
    handleForward,
    handleImgClick,
    modal,
    handleToggleModal,
  } = useModal();
  return (
    <section
      className={` max-[600px]:hidden absolute top-0 bottom-0 h-[100svh] w-[100svw] z-10 bg-[#2a2a2ae1] flex flex-col items-center justify-center gap-2 overflow-y-hidden ${
        !modal ? 'hidden' : 'flex'
      }`}
    >
      <span
        className="text-[#FF7D1B] text-4xl translate-x-[12rem]"
        onClick={handleToggleModal}
      >
        <IoCloseSharp />
      </span>
      <div className="  flex flex-row gap-3 item-center justify-center  min-[1100px]:flex-col min-[1100px]:mt-0">
        <article className="max-[600px]:mt-[3.5rem] relative  ">
          <figure className="flex item-center justify-center">
            <img
              src={shoeData.imageSelect}
              alt={shoeData.alt}
              className=" h-[35rem] w-[35rem] rounded-[1rem] min-[1100px]:w-[30rem] min-[1100px]:h-[30rem] cursor-pointer"
            />
          </figure>
          <div className="flex absolute top-[44%] items-center justify-between w-[100%]  px-4 ">
            <button
              className="bg-[white] px-[1rem] py-[.9rem] rounded-full"
              onClick={handleBackward}
            >
              <img
                src="/assets/icon-previous.svg"
                alt="icon next"
                className="h-[1rem]"
              />
            </button>
            <button
              className="bg-[white] px-[1rem] py-[.9rem] rounded-full"
              onClick={handleForward}
            >
              <img
                src="/assets/icon-next.svg"
                alt="icon prev"
                className="h-[1rem]"
              />
            </button>
          </div>
        </article>
        <ul className="flex flex-col items-center justify-center gap-2 max-[600px]:hidden min-[1100px]:flex-row min-[1100px]:gap-[1.8rem]">
          {image.map((item, i) => (
            <li
              key={item.alt}
              onClick={() => handleImgClick(i)}
            >
              <img
                src={item.imageThumbnail}
                alt={item.alt}
                className="w-[8.3rem] rounded-[1rem] min-[1100px]:w-[5.5rem]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Modal;
