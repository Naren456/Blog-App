import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import GameDetail from './pages/GameDetail';
import Recommdation from './pages/Recommdation';
import SearchResults from './pages/SearchResults';
import { SavedGamesProvider } from './context/SavedGamesContext';

import { Banner } from './components/Banner';
import "./App.css"

const App = () => {
  return (
    <SavedGamesProvider>
      <div className="min-h-screen bg-gray-800 text-white bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved-games" element={<Favourite />} />
          <Route path="/recommendations" element={<Recommdation />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </SavedGamesProvider>
  );
};

export default App;
