import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import MyProvider from './context/CartContex';


function App() {
  return (
    <>
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <Home />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/category/bazar' element={<ItemListContainer category={'bazar'}/>} />
            <Route path='/category/deco' element={<ItemListContainer category={'deco'}/>} />
            <Route path='/category/cocina' element={<ItemListContainer category={'cocina'}/>} />
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </MyProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
