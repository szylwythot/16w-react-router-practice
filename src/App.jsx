import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
