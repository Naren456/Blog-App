import React from 'react';

const GenreSelector = ({ genres, selectedGenres, onGenreToggle }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Preferred Genres</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {genres.map(genre => (
          <label key={genre.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedGenres.includes(genre.id)}
              onChange={() => onGenreToggle(genre.id)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span>{genre.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenreSelector; 