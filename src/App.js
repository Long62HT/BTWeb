import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Navs from './components/Navs';
import Slide from './components/Slide';
import Form1 from './components/Form1';
function App() {
  return (
    
        <div className="App">
        <Home />
        <Navs/>
        <Slide/>
        <Form1/>
    </div>
  );
}

export default App;
