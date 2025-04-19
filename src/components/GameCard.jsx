import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="bg-gray-700 rounded-2xl shadow-md p-4 w-full max-w-sm transition-transform hover:scale-105 h-[450px]">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <h2 className="text-xl font-bold text-gray-900 mb-2">{game.name}</h2>

      {/* Genres */}
      {game.genres && (
        <div className="flex flex-wrap gap-2 text-sm mb-2">
          {game.genres.map((genre) => (
            <span
              key={genre.id}
              className="bg-gray-500 text-gray-800 px-2 py-1 rounded-full"
            >
              {genre.name}
            </span>
          ))}
        </div>
      )}

      {/* Platforms */}
      {game.platforms && (
        <p className="text-gray-00 text-sm mb-2">
          Platforms:{" "}
          {game.platforms
            .map((p) => p.platform.name)
            .filter(Boolean)
            .join(", ")}
        </p>
      )}

      {/* Rating */}
      <p className="text-gray-500 text-sm">Rating: {game.rating} ⭐</p>
    </div>
  );
};

export default GameCard;
