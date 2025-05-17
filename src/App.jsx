import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import LeftSide from './Pages/LeftSide/LeftSide';
import { Outlet } from 'react-router';
import RightSide from './Pages/RightSide/RightSide';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  );
};

export default App;