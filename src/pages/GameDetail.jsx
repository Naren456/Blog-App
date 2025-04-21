import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSavedGames } from '../context/SavedGamesContext';
import HeroSection from '../components/GameDetails/HeroSection';
import GameInfo from '../components/GameDetails/GameInfo';
import GameDescription from '../components/GameDetails/GameDescription';
import Platforms from '../components/GameDetails/Platforms';
import SystemRequirements from '../components/GameDetails/SystemRequirements';


const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toggleSaveGame, isGameSaved } = useSavedGames();
  const isSaved = game ? isGameSaved(game.id) : false;



  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`);
        const data = await res.json();
        setGame(data);
      } catch (err) {
        setError('Error fetching game details');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id]);

  const handleSave = () => {
    if (game) {
      toggleSaveGame(game);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-red-500">Error loading game details</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-6 md:pb-8">
      <HeroSection game={game} isSaved={isSaved} onSave={handleSave} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-xl p-4 md:p-6 mt-8">
          <GameInfo game={game} />
          <SystemRequirements platforms={game.platforms} />
          <GameDescription description={game.description} />
          <Platforms platforms={game.platforms} />
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
