import { useModal } from '../contexts/ImageContext';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = () => {
  const {
    shoeData,
    image,
    navigate,
    handleBackward,
    handleForward,
    handleImgClick,
    modal,
    handleToggleModal,
  } = useModal();
  return (
    <section
      className={` max-[600px]:hidden absolute top-0 bottom-0 h-[100svh] w-[100svw] z-10 bg-[#2a2a2ae1] flex flex-col items-center justify-center gap-2 min-[1100px]:overflow-y-hidden ${
        !modal ? 'min-[601px]:hidden' : 'min-[601px]:flex'
      }`}
    >
      <span
        className="text-[#FF7D1B] text-4xl translate-x-[12rem] min-[1100px]:translate-x-[14rem]"
        onClick={handleToggleModal}
      >
        <IoCloseSharp />
      </span>
      <div className="  flex flex-row gap-3 item-center justify-center  min-[1100px]:flex-col min-[1100px]:mt-0">
        <article className="max-[600px]:mt-[3.5rem] relative  ">
          <figure className="flex justify-center item-center">
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
              className={` relative group min-[601px]:rounded-[1rem] ${
                navigate === i && ' border-[#FF7D1B] border-[.17rem]'
              }`}
            >
              <img
                src={item.imageThumbnail}
                alt={item.alt}
                className="w-[8.3rem] rounded-[1rem] min-[1100px]:w-[5.5rem]"
              />
              <div
                className={`absolute inset-0 transition-opacity bg-[#fff7ec] opacity-0 group-hover:opacity-50 ${
                  navigate === i && 'inset-0 opacity-50 bg-[#fff7ec] '
                }`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Modal;
