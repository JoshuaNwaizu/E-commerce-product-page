import { useShoes } from '../contexts/ShoeContext';
import { useModal } from '../contexts/ImageContext';

const navList: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];

const NavBar: React.FC = () => {
  const { cartItems, isOpen, handleToggleNav, handleCartOpen, addCart, count } =
    useShoes();
  const { nav, handleChangeNav } = useModal();

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#fff]    ">
      <nav className="flex flex-row items-center justify-between mx-5 h-[5rem] min-[601px]:gap-5 min-[601px]:mx-[4rem] min-[1100px]:mx-[8rem] border-b-[1px] border-[#E9E9E9]">
        <div className="flex flex-row gap-4 r">
          <span
            className="cursor-pointer min-[601px]:hidden"
            onClick={handleToggleNav}
          >
            <img
              src="/assets/icon-menu.svg"
              alt="menu"
              className="w-[1.3rem] cursor-pointer"
            />
          </span>
          <span className="cursor-pointer">
            <img
              src="/assets/logo.svg"
              alt="logo"
            />
          </span>
          <div
            className={`max-sm:w-[100svw] bg-[#0000009e] max-sm:left-0 top-0 max-sm:h-[100svh] max-sm:absolute z-50 ${
              isOpen ? 'max-sm:block' : 'max-sm:hidden'
            }`}
          >
            <div
              className={` max-sm:absolute bg-[#fff] max-sm:w-[70svw] max-sm:left-0 top-0 max-sm:h-[100svh] flex max-sm:flex-col transition-all duration-300 min-[1100px]:flex-row  ${
                isOpen ? 'max-sm:left-0' : 'max-sm:left-[-100%]'
              }`}
            >
              <span className="absolute top-[2rem] ml-6 flex flex-col gap-[3rem]">
                <span
                  onClick={handleToggleNav}
                  className="cursor-pointer  min-[601px]:hidden"
                >
                  <img
                    src="/assets/icon-close.svg"
                    alt="Icon close"
                    className="cursor-pointer"
                  />
                </span>
                <ul className="flex flex-col gap-5  min-[601px]:flex-row min-[601px]:gap-4">
                  {navList.map((list, i) => (
                    <li
                      key={list}
                      onClick={() => handleChangeNav(i)}
                      className={`text-[1.1rem] font-medium cursor-pointer min-[601px]:text-[#6B6E74] hover:text-[#000] min-[601px]:pb-[1rem] transition-all duration-150 ${
                        nav === i
                          ? ' min-[601px]:border-b-4 min-[601px]:border-[#FF7D1B]'
                          : ''
                      }`}
                    >
                      {list}
                    </li>
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span
            onClick={handleCartOpen}
            className="cursor-pointer"
          >
            {addCart && (
              <span className="absolute top-5 right-[3.7rem] bg-[#FF7D1B] px-2 rounded-xl text-[#fff] text-[.8rem] min-[768px]:right-[6.5rem] min-[1100px]:right-[10.5rem]">
                {count}
              </span>
            )}

            <img
              src="/assets/icon-cart.svg"
              alt="cart logo"
            />
          </span>
          <img
            src="/assets/image-avatar.png"
            alt="Avatar image"
            className="w-[2rem] hover:border-[.17rem] border-[#FFAC6A] rounded-full"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
