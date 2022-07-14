import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import MyProvider from './context/CartContex';
import { initializeApp } from "firebase/app";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Checkout from './components/Checkout';




function App() {
  
   initializeApp({
    apiKey: "AIzaSyB60vIcd8XnwrUngZyukzTD6uYQ8Cv4424",
    authDomain: "tienda-online-31205.firebaseapp.com",
    projectId: "tienda-online-31205",
    storageBucket: "tienda-online-31205.appspot.com",
    messagingSenderId: "612125641554",
    appId: "1:612125641554:web:59d36001e5e3cce057088b"
  });

  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/category/bazar' element={<ItemListContainer category={'bazar'}/>} />
            <Route path='/category/deco' element={<ItemListContainer category={'deco'}/>} />
            <Route path='/category/cocina' element={<ItemListContainer category={'cocina'}/>} />
            <Route path='/contacto' element = {<Contact />} />
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </MyProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
