import React from 'react';
import SystemSpecsForm from './SystemSpecsForm';
import GenreSelector from './GenreSelector';

const RecommendationForm = ({ formData, genres, handleInputChange, handleGenreToggle, onSubmit }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Get Personalized Game Recommendations</h1>
      
      <form onSubmit={onSubmit} className="space-y-8">
        <SystemSpecsForm 
          formData={formData} 
          handleInputChange={handleInputChange} 
        />
        
        <GenreSelector 
          genres={genres} 
          selectedGenres={formData.selectedGenres}
          onGenreToggle={handleGenreToggle}
        />

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          disabled={formData.selectedGenres.length === 0}
        >
          Get Recommendations
        </button>
      </form>
    </>
  );
};

export default RecommendationForm; 