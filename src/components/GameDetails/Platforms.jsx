import React from 'react';

const Platforms = ({ platforms }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Platforms</h2>
      <div className="flex flex-wrap gap-2">
        {platforms?.map((platform) => (
          <span 
            key={platform.platform.id}
            className="px-3 py-1 bg-gray-700 rounded-full text-xs md:text-sm hover:bg-gray-600 transition-colors"
          >
            {platform.platform.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Platforms; 