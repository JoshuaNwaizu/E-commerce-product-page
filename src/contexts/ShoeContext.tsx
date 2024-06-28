import React, { createContext, useContext, useReducer, useState } from 'react';

interface CartContextType {
  cartOpen: boolean;
  isOpen: boolean;
  count: number;
  addCart: boolean;
  handleCartOpen: () => void;
  handleItemAdd: () => void;
  handleItemMinus: () => void;
  handleToggleNav: () => void;
  handleAddCart: () => void;
  cartItems: CartNav[];
  handleDelete: () => void;
}
type ChildrenProps = { children: React.ReactNode };

interface StateType {
  count: number;
}
interface ActionType {
  type: 'ADD' | 'MINUS';
}

interface CartNav {
  name: string;
  price: number;
}

const cartItems: CartNav[] = [
  {
    name: 'Fall Limited Edition Sneakers',
    price: 125,
  },
];

const ShoeContext = createContext<CartContextType | undefined>(undefined);

const initialState = { count: 0 };
const reducer: React.Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
    case 'MINUS':
      return { ...state, count: Math.max(state.count - 1, 0) };
  }
};

const ShoeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [addCart, setAddCart] = useState<boolean>(false);

  const handleAddCart = () => {
    if (state.count > 0) {
      setAddCart(true);
    }
  };

  const handleToggleNav = () => {
    setIsOpen((open) => !open);

    if (!isOpen) {
      setCartOpen(false);
    }
  };

  const handleItemAdd = () => {
    dispatch({ type: 'ADD' });
  };

  const handleItemMinus = () => {
    dispatch({ type: 'MINUS' });
    if (count === 1) setAddCart((open) => !open);
  };

  const handleCartOpen = () => {
    setCartOpen((open) => !open);
  };

  const handleDelete = () => {
    setAddCart((cart) => !cart);
    state.count = 0;
  };

  return (
    <ShoeContext.Provider
      value={{
        cartOpen,
        handleCartOpen,
        handleItemAdd,
        handleItemMinus,
        count,
        isOpen,
        handleToggleNav,
        addCart,
        handleAddCart,
        cartItems,
        handleDelete,
      }}
    >
      {children}
    </ShoeContext.Provider>
  );
};

const useShoes = () => {
  const context = useContext(ShoeContext);
  if (context === undefined) throw new Error("Can't access this outside");
  return context;
};
export { ShoeProvider, useShoes };
