import ImageDisplay from './ImageDisplay';
import Info from './Info';

const PageInfo = () => {
  return (
    <section className="min-[1100px]:h-svh min-[1100px]:flex min-[1100px]:flex-row min-[1100px]:item-center min-[1100px]:justify-center min-[1100px]:mx-[6rem]  min-[1100px]:mt-[1.5rem]">
      <ImageDisplay />
      <Info />
    </section>
  );
};

export default PageInfo;
