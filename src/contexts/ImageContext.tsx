// import React from 'react'
import { useReducer, useState } from 'react';
import { IMAGES_DATA } from '../shoes';

import React, { createContext, useContext } from 'react';

type ChildrenProps = {
  children: React.ReactNode;
};

interface Shoes {
  imageSelect: string;
  imageThumbnail: string;
  alt: string;
}

interface ImageContextType {
  handleForward: () => void;
  modal: boolean
  image: Shoes[];
  shoeData: Shoes;
  handleBackward: () => void;
  handleImgClick: (num: number) => void;
  handleToggleModal: () => void;
}
const ModalContext = createContext<ImageContextType | undefined>(undefined);

interface NavigateState {
  navigate: number;
}

interface NavigateAction {
  type: string;
  payload?: any;
}

const initialState = { navigate: 0 };
const image = IMAGES_DATA;

const reducer: React.Reducer<NavigateState, NavigateAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'FORWARD_NAV':
      return { ...state, navigate: state.navigate + 1 };

    case 'BACKWARD_NAV':
      return { ...state, navigate: state.navigate - 1 };
    case 'SET_NAVIGATE':
      return { ...state, navigate: action.payload };
    default:
      console.error('Err');
      return state;
  }
};

const ModalProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [modal, setIsModal] = useState<boolean>(false)
  const { navigate } = state;

  const shoeData = IMAGES_DATA[navigate];

  const handleForward = () => {
    dispatch({ type: 'FORWARD_NAV' });

    if (state.navigate === 3) {
      state.navigate = navigate - 4;
    }
  };

  const handleToggleModal = ()=> {
    setIsModal(modal => !modal)
  }

  const handleBackward = () => {
    dispatch({ type: 'BACKWARD_NAV' });

    if (state.navigate === 0) {
      state.navigate = navigate + 4;
    }
  };

  const handleImgClick = (num: number) => {
    dispatch({ type: 'SET_NAVIGATE', payload: num });
  };

  return (
    <ModalContext.Provider
      value={{ image, shoeData, handleForward, handleBackward, handleImgClick, modal, handleToggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) throw new Error("Can't access this outside");
  return context;
};

export { ModalProvider, useModal };
