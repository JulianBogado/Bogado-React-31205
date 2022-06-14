import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/bazar" element={<ItemDetailContainer category={"bazar"}/>} />
          <Route path="/category/deco" element={<ItemDetailContainer category={"deco"}/>} />
          <Route path="/category/cocina" element={<ItemDetailContainer category={"cocina"}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
