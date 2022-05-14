
import './App.css';
import{ Route, Routes } from "react-router-dom";
import Stocks from './pages/Stocks';
import Main from './pages/Main';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Main />} />
       <Route path="/stocks" element={<Stocks />} />

     </Routes>
    </div>
  );
}

export default App;
