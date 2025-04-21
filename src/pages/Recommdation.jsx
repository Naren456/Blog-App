import React, { useState, useEffect } from 'react';
import RecommendationForm from '../components/Recommendation/RecommendationForm';
import RecommendationResults from '../components/Recommendation/RecommendationResults';

const Recommdation = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [showResults, setShowResults] = useState(false);


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
        const res = await fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_RAWG_API_KEY}`);
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
      const genreParam = formData.selectedGenres.join(',');
      const res = await fetch(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}&genres=${genreParam}&ordering=-rating&page_size=20`
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
          <RecommendationForm
            formData={formData}
            genres={genres}
            handleInputChange={handleInputChange}
            handleGenreToggle={handleGenreToggle}
            onSubmit={handleSubmit}
          />
        ) : (
          <RecommendationResults
            recommendations={recommendations}
            onModifyPreferences={() => setShowResults(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Recommdation;
