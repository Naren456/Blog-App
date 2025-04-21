import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSavedGames } from '../context/SavedGamesContext';
import { Star, Calendar, Gamepad2 } from 'lucide-react';

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const { toggleSaveGame, isGameSaved } = useSavedGames();
  const isSaved = isGameSaved(game.id);

  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    toggleSaveGame(game);
  };

  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-200 relative group"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <button
          onClick={handleSave}
          className="absolute top-2 right-2 p-2 bg-gray-900 bg-opacity-70 rounded-full z-10 
                   transition-all duration-200 hover:bg-opacity-100 hover:scale-110"
          title={isSaved ? "Remove from favorites" : "Add to favorites"}
        >
          <Star
            className={`w-5 h-5 ${
              isSaved ? 'fill-yellow-500 text-yellow-500' : 'text-white'
            }`}
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-3 truncate">
          {game.name}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-300">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{game.rating || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <Calendar className="w-4 h-4" />
              <span>{game.released ? new Date(game.released).getFullYear() : 'TBA'}</span>
            </div>
          </div>

          {game.genres && (
            <div className="flex flex-wrap gap-1">
              {game.genres.slice(0, 2).map((genre) => (
                <span
                  key={genre.id}
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full flex items-center gap-1"
                >
                  <Gamepad2 className="w-3 h-3" />
                  {genre.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
