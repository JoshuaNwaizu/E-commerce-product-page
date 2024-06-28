import { useModal } from '../contexts/ImageContext';

const ImageDisplay = () => {
  const {
    shoeData,
    image,
    handleBackward,
    handleForward,
    handleImgClick,
    handleToggleModal,
  } = useModal();

  return (
    <section className=" flex flex-row gap-3 min-[768px]:item-center min-[768px]:justify-center min-[768px]:mt-[7rem]">
      <article
        className="max-[600px]:mt-[3.5rem] relative  "
        onClick={handleToggleModal}
      >
        <figure className="min-[768px]:flex min-[768px]:item-center min-[768px]:justify-center">
          <img
            src={shoeData.imageSelect}
            alt={shoeData.alt}
            className="h-[100svw] w-[100svw] min-[768px]:h-[35rem] min-[768px]:w-[35rem] min-[768px]:rounded-[1rem]"
          />
        </figure>
        <div className="flex absolute top-[44%] items-center justify-between w-[100svw] px-4 min-[768px]:hidden">
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
      <ul className="flex flex-col items-center justify-center gap-2 max-[600px]:hidden">
        {image.map((item, i) => (
          <li
            key={item.alt}
            onClick={() => handleImgClick(i)}
          >
            <img
              src={item.imageThumbnail}
              alt={item.alt}
              className="w-[8.3rem] min-[768px]:rounded-[1rem]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImageDisplay;
