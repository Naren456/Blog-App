import React from 'react';

const HeroSection = ({ game, isSaved, onSave }) => {
  return (
    <div 
      className="w-full h-[300px] md:h-[500px] relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${game.background_image})`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{game.name}</h1>
            <button
              onClick={onSave}
              className={`w-full sm:w-auto px-6 py-2 rounded-lg transition-colors ${
                isSaved 
                ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600' 
                : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {isSaved ? 'Saved' : 'Save Game'}
            </button>
          </div>
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <div className="flex items-center bg-blue-600 px-3 py-1 rounded-lg">
              <span className="font-bold text-lg md:text-xl">{game.rating}</span>
              <span className="ml-1 text-xs md:text-sm">/5</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {game.genres?.map((genre) => (
                <span key={genre.id} className="px-3 py-1 bg-gray-800 rounded-full text-xs md:text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 