// import { useState } from 'react';

import { useReducer } from 'react';
import { IMAGES_DATA } from '../shoes';

interface NavigateState {
  navigate: number;
}

interface NavigateAction {
  type: 'FORWARD_NAV' | 'BACKWARD_NAV';
}

const initialState = { navigate: 0 };

const reducer: React.Reducer<NavigateState, NavigateAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'FORWARD_NAV':
      return { ...state, navigate: Math.min(state.navigate + 1, 3) };

    case 'BACKWARD_NAV':
      return { ...state, navigate: Math.max(state.navigate - 1, 0) };
    default:
      console.log('Err');
      return state;
  }
};

const ImageDisplay = () => {
  // const [isNavigate, setIsNavigate] = useState<number>(0);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { navigate } = state;

  const shoeData = IMAGES_DATA[navigate];

  // const handlePrev = () => {
  //   dispatch({ type: 'BACKWARD_NAV' });

  //   console.log('Previous');
  // };
  // const handleNext = () => {
  //   dispatch({ type: 'FORWARD_NAV' });
  //   console.log('next');
  // };

  return (
    <section className="mt-[3.5rem] relative">
      <figure>
        <img
          src={shoeData.imageSelect}
          alt={shoeData.alt}
          className="h-[100svw] w-[100svw]"
        />
      </figure>
      <div className="flex absolute top-[44%] items-center justify-between w-[100svw] px-4">
        <button
          className="bg-[white] px-[1.2rem] py-[1.05rem] rounded-full"
          onClick={() => dispatch({ type: 'BACKWARD_NAV' })}
        >
          <img
            src="/assets/icon-previous.svg"
            alt="icon next"
            className="h-[1rem]"
          />
        </button>
        <button
          className="bg-[white] px-[1.2rem] py-[1.05rem] rounded-full"
          onClick={() => dispatch({ type: 'FORWARD_NAV' })}
        >
          <img
            src="/assets/icon-next.svg"
            alt="icon prev"
            className="h-[1rem]"
          />
        </button>
      </div>
    </section>
  );
};

export default ImageDisplay;
