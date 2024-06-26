import React, { useState } from 'react';
import CartNav from './components/CartNav';
import ImageDisplay from './components/ImageDisplay';
import Info from './components/Info';
import NavBar from './components/NavBar';

type CartOpen = {
  cartOpen: boolean;
  handleCartOpen: () => void;
};
const App: React.FC<CartOpen> = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const handleCartOpen = () => {
    setCartOpen((open) => !open);
  };
  return (
    <main>
      <NavBar handleCartOpen={handleCartOpen} />
      <CartNav
        cartOpen={cartOpen}
        handleCartOpen={handleCartOpen}
      />
      <ImageDisplay />
      <Info />
    </main>
  );
};

export default App;
