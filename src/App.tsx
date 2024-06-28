import CartNav from './components/CartNav';
import ImageDisplay from './components/ImageDisplay';
import Info from './components/Info';
import NavBar from './components/NavBar';
import { ShoeProvider } from './contexts/ShoeContext';

const App = () => {
  return (
    <ShoeProvider>
      <main>
        <NavBar />
        <CartNav />
        <ImageDisplay />
        <Info />
      </main>
    </ShoeProvider>
  );
};

export default App;
