import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import GameCard from '../components/GameCard';

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const selectedGenre = searchParams.get('genre') || '';
  const [games, setGames] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const url = `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch genres');
        }
        const data = await response.json();
        const fetchedGenres = data.results.map((genre) => ({
          name: genre.name,
          slug: genre.slug,
        }));
        setGenres([{ name: 'All', slug: '' }, ...fetchedGenres]);
      } catch (err) {
        console.error('Error fetching genres:', err);
      }
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchGames = async () => {
      if (!query) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const params = new URLSearchParams({
          key: import.meta.env.VITE_RAWG_API_KEY,
          search: query,
          search_exact: true,
          page_size: 5,
          ordering: '-rating'
        });

        if (selectedGenre) {
          params.append('genres', selectedGenre);
        }

        const url = `https://api.rawg.io/api/games?${params.toString()}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }

        const data = await response.json();
        setGames(data.results);
      } catch (err) {
        setError('Failed to fetch games. Please try again later.');
        console.error('Error fetching games:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [query, selectedGenre]);

  const handleGenreChange = (genreSlug) => {
    setSearchParams(prev => {
      if (genreSlug) {
        prev.set('genre', genreSlug);
      } else {
        prev.delete('genre');
      }
      return prev;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-red-500 text-xl">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">
            Search Results for "{query}"
          </h1>
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre.slug}
                onClick={() => handleGenreChange(genre.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedGenre === genre.slug
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
        
        {games.length === 0 ? (
          <p className="text-gray-300 text-lg">No games found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults; 