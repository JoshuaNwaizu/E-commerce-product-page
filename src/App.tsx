import CartNav from './components/CartNav';
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import PageInfo from './components/PageInfo';
import { ModalProvider } from './contexts/ImageContext';
import { ShoeProvider } from './contexts/ShoeContext';

const App = () => {
  return (
    <ShoeProvider>
      <ModalProvider>
        {' '}
        <main className="">
          <NavBar />
          <CartNav />
          <PageInfo />
          <Modal />
        </main>
      </ModalProvider>
    </ShoeProvider>
  );
};

export default App;
