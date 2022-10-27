import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
function App() {
  return (
    <div className="App">
    <Navbar />
    <ItemListContainer saludo = {"Bienvenido a Bosque Dulce. Dulce sabor, dulces momentos"}/>
    </div>
  );
}

export default App;
