import React, { createContext, useContext, useState, useEffect } from 'react';

const SavedGamesContext = createContext();

export const useSavedGames = () => {
  return useContext(SavedGamesContext);
};

export const SavedGamesProvider = ({ children }) => {
  const [savedGames, setSavedGames] = useState(() => {
    const saved = localStorage.getItem('savedGames');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedGames', JSON.stringify(savedGames));
  }, [savedGames]);

  const toggleSaveGame = (game) => {
    setSavedGames(prevGames => {
      const isGameSaved = prevGames.some(g => g.id === game.id);
      if (isGameSaved) {
        return prevGames.filter(g => g.id !== game.id);
      } else {
        return [...prevGames, game];
      }
    });
  };

  const isGameSaved = (gameId) => {
    return savedGames.some(game => game.id === gameId);
  };

  return (
    <SavedGamesContext.Provider value={{ savedGames, toggleSaveGame, isGameSaved }}>
      {children}
    </SavedGamesContext.Provider>
  );
}; 