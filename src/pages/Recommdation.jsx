import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';

const Recommdation = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const API_KEY = 'a52f7654d212491c82e635495ba2129a';

  const [formData, setFormData] = useState({
    cpu: '',
    gpu: '',
    ram: '8',
    selectedGenres: [],
    maxPrice: '60'
  });

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const data = await res.json();
        setGenres(data.results || []);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };

    fetchGenres();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenreToggle = (genreId) => {
    setFormData(prev => {
      const genres = prev.selectedGenres.includes(genreId)
        ? prev.selectedGenres.filter(id => id !== genreId)
        : [...prev.selectedGenres, genreId];
      return { ...prev, selectedGenres: genres };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Construct genre parameter
      const genreParam = formData.selectedGenres.join(',');
      
      // Fetch games based on selected genres
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genreParam}&ordering=-rating&page_size=20`
      );
      const data = await res.json();
      setRecommendations(data.results || []);
      setShowResults(true);
    } catch (err) {
      console.error('Error fetching recommendations:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {!showResults ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Get Personalized Game Recommendations</h1>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* System Specifications */}
              <div className="bg-gray-800 p-6 rounded-lg space-y-6">
                <h2 className="text-xl font-semibold mb-4">System Specifications</h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Processor (CPU)</label>
                  <input
                    type="text"
                    name="cpu"
                    value={formData.cpu}
                    onChange={handleInputChange}
                    placeholder="e.g., Intel Core i5-9400F"
                    className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Graphics Card (GPU)</label>
                  <input
                    type="text"
                    name="gpu"
                    value={formData.gpu}
                    onChange={handleInputChange}
                    placeholder="e.g., NVIDIA GTX 1660"
                    className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">RAM (GB)</label>
                  <select
                    name="ram"
                    value={formData.ram}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="4">4 GB</option>
                    <option value="8">8 GB</option>
                    <option value="16">16 GB</option>
                    <option value="32">32 GB</option>
                    <option value="64">64 GB</option>
                  </select>
                </div>
              </div>

              {/* Genre Preferences */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Preferred Genres</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {genres.map(genre => (
                    <label key={genre.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.selectedGenres.includes(genre.id)}
                        onChange={() => handleGenreToggle(genre.id)}
                        className="form-checkbox h-5 w-5 text-blue-500"
                      />
                      <span>{genre.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Maximum Price ($)</h2>
                <input
                  type="range"
                  name="maxPrice"
                  min="0"
                  max="60"
                  step="5"
                  value={formData.maxPrice}
                  onChange={handleInputChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm mt-2">
                  <span>$0</span>
                  <span>${formData.maxPrice}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={formData.selectedGenres.length === 0}
              >
                Get Recommendations
              </button>
            </form>
          </>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Recommended Games</h2>
              <button
                onClick={() => setShowResults(false)}
                className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Modify Preferences
              </button>
            </div>

            {recommendations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recommendations.map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-400">
                  No games found matching your preferences. Try adjusting your criteria.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommdation;
