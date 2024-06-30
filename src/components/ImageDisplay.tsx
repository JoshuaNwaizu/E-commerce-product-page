import { useModal } from '../contexts/ImageContext';

const ImageDisplay = () => {
  const {
    shoeData,
    image,
    handleBackward,
    handleForward,
    handleImgClick,
    handleToggleModal,
    navigate,
  } = useModal();

  return (
    <section className=" flex flex-row gap-3 min-[601px]:item-center min-[601px]:justify-center min-[601px]:mt-[7rem] min-[1100px]:flex-col min-[1100px]:w-[50svw] min-[1100px]:mt-0 min-[1100px]:gap-[1rem]  max-w-[800px]">
      <article
        className="max-[600px]:mt-[3.5rem] relative  "
        onClick={handleToggleModal}
      >
        <figure className="min-[601px]:flex min-[601px]:item-center min-[601px]:justify-center px-[-2rem] ">
          <img
            src={shoeData.imageSelect}
            alt={shoeData.alt}
            className="h-[100svw] w-[100svw] min-[601px]:h-[35rem] min-[601px]:w-[35rem] min-[601px]:rounded-[1rem] min-[1100px]:w-[24rem] min-[1100px]:h-[24rem] cursor-pointer"
          />
        </figure>
        <div className="flex absolute top-[44%] items-center justify-between w-[100svw] px-4 min-[601px]:hidden">
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
      <ul className="flex flex-col items-center justify-center gap-2 max-[600px]:hidden min-[1100px]:flex-row min-[1100px]:gap-[1.2rem] ">
        {image.map((item, i) => (
          <li
            key={item.alt}
            onClick={() => handleImgClick(i)}
            className={`relative cursor-pointer group min-[601px]:rounded-[1rem]  ${
              navigate === i && ' border-[#FF7D1B] border-[.17rem]'
            } `}
          >
            <img
              src={item.imageThumbnail}
              alt={item.alt}
              className="w-[8.3rem] min-[601px]:rounded-[.8rem] min-[1100px]:w-[5rem]"
            />
            <div
              className={`absolute inset-0 transition-opacity bg-[#fff7ec] opacity-0 group-hover:opacity-50 ${
                navigate === i && 'inset-0 opacity-50 bg-[#fff7ec] '
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImageDisplay;
