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
      return { ...state, navigate: state.navigate + 1 };

    case 'BACKWARD_NAV':
      return { ...state, navigate: state.navigate - 1 };
    default:
      console.error('Err');
      return state;
  }
};

const ImageDisplay = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { navigate } = state;

  const shoeData = IMAGES_DATA[navigate];

  const handleForward = () => {
    dispatch({ type: 'FORWARD_NAV' });

    if (state.navigate === 3) {
      state.navigate = navigate - 4;
    }
  };

  const handleBackward = () => {
    dispatch({ type: 'BACKWARD_NAV' });

    if (state.navigate === 0) {
      state.navigate = navigate + 4;
    }
  };

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
    </section>
  );
};

export default ImageDisplay;
