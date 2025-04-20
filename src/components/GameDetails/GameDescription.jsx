import React from 'react';

const GameDescription = ({ description }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
      <div 
        className="text-sm md:text-base text-gray-300 leading-relaxed space-y-4 prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default GameDescription; 