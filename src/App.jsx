import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favourite from './pages/Favourite';

import { Banner } from './components/Banner';
import "./App.css"
import Recommdation from './pages/Recommdation';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white bg-gray-900">
      <Navbar />
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Favourite/>} />
        <Route path="/login" element={<Recommdation />} />
      </Routes>
    </div>
  );
};

export default App
