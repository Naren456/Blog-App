import React from 'react';
import GameCard from '../GameCard';

const RecommendationResults = ({ recommendations, onModifyPreferences }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Recommended Games</h2>
        <button
          onClick={onModifyPreferences}
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
  );
};

export default RecommendationResults; 