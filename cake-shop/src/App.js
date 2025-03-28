import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BestOfUs from './components/BestOfus';
import About from './components/About';
import Product from './components/Product';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <BestOfUs/>
      <About/>
      <Product/>
    </div> 
  );
}

export default App;
