import React from 'react';

const GameInfo = ({ game }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-gray-400 text-xs md:text-sm mb-1">Release Date</h3>
        <p className="font-semibold text-sm md:text-base">{game.released}</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-gray-400 text-xs md:text-sm mb-1">Developer</h3>
        <p className="font-semibold text-sm md:text-base">{game.developers?.[0]?.name || 'N/A'}</p>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-gray-400 text-xs md:text-sm mb-1">Publisher</h3>
        <p className="font-semibold text-sm md:text-base">{game.publishers?.[0]?.name || 'N/A'}</p>
      </div>
    </div>
  );
};

export default GameInfo; 