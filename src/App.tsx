import CartNav from './components/CartNav';
import ImageDisplay from './components/ImageDisplay';
import Info from './components/Info';
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import { ModalProvider } from './contexts/ImageContext';
import { ShoeProvider } from './contexts/ShoeContext';

const App = () => {
  return (
    <ShoeProvider>
      <ModalProvider>
        {' '}
        <main>
          <NavBar />
          <CartNav />
          <ImageDisplay />
          <Info />
          <Modal />
        </main>
      </ModalProvider>
    </ShoeProvider>
  );
};

export default App;
