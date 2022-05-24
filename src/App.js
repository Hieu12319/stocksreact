
import './App.css';
import{ Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Stocks from './pages/Stocks';
import About from './pages/About';
import Nav from './components/Nav';
import SingleStock from "./pages/SingleStock"


function App() {
  return (
    <div className="App">
      <Nav />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/stocks" element={<Stocks />} />
      <Route path="/about" element={<About />} />
      <Route path="/stocks/:symbol" element={<SingleStock />} />
     </Routes>
     
    </div>
  );
}

export default App;
