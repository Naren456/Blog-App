import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import Login from './pages/Login';
import { Banner } from './components/Banner';
import "./App.css"
const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white bg-gray-900">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App
