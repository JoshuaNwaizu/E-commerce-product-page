import React, { createContext, useContext, useReducer } from 'react';

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
  cartOpen: boolean;
  isOpen: boolean;
  addCart: boolean;
}
interface ActionType {
  type: string;
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

const initialState = {
  count: 0,
  cartOpen: false,
  isOpen: false,
  addCart: false,
};
const reducer: React.Reducer<StateType, ActionType> = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
    case 'MINUS':
      return { ...state, count: Math.max(state.count - 1, 0) };
    case 'CART_OPEN':
      return { ...state, cartOpen: !state.cartOpen };
    case 'OPEN_NAV':
      return { ...state, isOpen: !state.isOpen };
    case 'ADD_CART':
      return { ...state, addCart: true };
    case 'RESET':
      return {
        ...state,
        count: 0,
        cartOpen: false,
        addCart: false,
      };
    default:
      console.error('No state present in ImageContext component');
      return state;
  }
};

const ShoeProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, cartOpen, isOpen, addCart } = state;

  const handleAddCart = () => {
    if (state.count > 0) {
      dispatch({ type: 'ADD_CART' });
    }
  };

  const handleToggleNav = () => {
    dispatch({ type: 'OPEN_NAV' });

    if (!state.isOpen) {
      state.cartOpen = false;
    }
    if (!state.isOpen) {
      return (document.body.style.overflow = 'hidden');
    } else {
      return (document.body.style.overflow = '');
    }
  };

  const handleItemAdd = () => {
    dispatch({ type: 'ADD' });
  };

  const handleItemMinus = () => {
    dispatch({ type: 'MINUS' });
    if (state.count === 1) state.addCart = false;
  };

  const handleCartOpen = () => {
    dispatch({ type: 'CART_OPEN' });
  };

  const handleDelete = () => {
    dispatch({ type: 'RESET' });
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
