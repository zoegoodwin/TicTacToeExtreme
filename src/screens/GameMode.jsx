import React, { createContext, useState, useContext } from 'react';

const GameMode = createContext();

export const GameModeProvider = ({ children }) => {
  const [time, setTime] = useState(5);
  const [isNormalMode, setIsNormalMode] = useState(false);

  return (
    <GameMode.Provider value={{ time, setTime, isNormalMode, setIsNormalMode }}>
      {children}
    </GameMode.Provider>
  );
};

export const useGameMode = () => {
  const mode = useContext(GameMode);
  if (!mode) {
    throw new Error('useGameMode must be used within a GameModeProvider');
  }
  return mode;
};