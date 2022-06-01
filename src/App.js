import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Esto es un saludo por props"}/>
    </div>
    </>
  );
}

export default App;
