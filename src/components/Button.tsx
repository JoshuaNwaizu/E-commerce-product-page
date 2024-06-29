// import React from 'react'
import { BsCart3 } from 'react-icons/bs';

interface Text {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<Text> = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center bg-[#FF7D1B] gap-4 px-7 py-4 rounded-lg font-bold text-[1.1rem] cursor-pointer"
    >
      <span className="text-[1.2rem] font-bold">
        <BsCart3 />
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Button;
