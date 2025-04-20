import React from "react";
import { useNavigate } from 'react-router-dom';
import { useSavedGames } from '../context/SavedGamesContext';

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const { toggleSaveGame, isGameSaved } = useSavedGames();
  const isSaved = isGameSaved(game.id);

  const handleClick = () => {
    navigate(`/game/${game.id}`);
  };

  const handleSave = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking save button
    toggleSaveGame(game);
  };

  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-200 relative group"
      onClick={handleClick}
    >
      {/* Save Button */}
      <button
        onClick={handleSave}
        className="absolute top-2 right-2 p-2 bg-gray-900 bg-opacity-70 rounded-full z-10 
                 transition-opacity duration-200 hover:bg-opacity-100"
      >
        <svg
          className={`w-6 h-6 ${isSaved ? 'text-yellow-500' : 'text-white'}`}
          fill={isSaved ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </button>

      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 truncate">
          {game.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-blue-400 font-bold">{game.rating}</span>
            <span className="text-gray-400 text-sm ml-1">/5</span>
          </div>
          {game.genres && (
            <div className="flex flex-wrap gap-1">
              {game.genres.slice(0, 2).map((genre) => (
                <span
                  key={genre.id}
                  className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                >
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
