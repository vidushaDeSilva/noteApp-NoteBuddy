import React, { createContext, useState } from 'react';

const SpacesContext = createContext();

export const SpacesProvider = ({ children }) => {

  const [spaces, setSpaces] = useState([]);
  const [onExSpaces, setOnExSpaces] = useState(false)
  const [spaceNotes, setSpaceNotes] = useState([])
  var onExploreSpace = false
  
  const updateSpaceNote = (spaceId) => {
    setSpaceNotes(prevNotes => ({
      ...prevNotes,
      [spaceId]: [],
    }));
  };

  return (
    <SpacesContext.Provider value={{ spaces, setSpaces, onExSpaces, setOnExSpaces, spaceNotes, setSpaceNotes, updateSpaceNote, onExploreSpace }}>
      {children}
    </SpacesContext.Provider>
  );
};

export default SpacesContext;
