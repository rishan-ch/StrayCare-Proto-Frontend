import './App.css';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddAnimal from './components/AddAnimal';
import ListOfDogs from './components/ListOfDogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddAnimal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<ListOfDogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
