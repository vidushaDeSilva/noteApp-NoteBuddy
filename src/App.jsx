import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import NoteArea from "./components/NoteArea/NoteArea";
import AddSpace from "./components/AddSpace/AddSpace";
import SpacePopup from "./components/SpacePopup/SpacePopup";
import ListSpaces from "./components/ListSpaces/ListSpaces";
import ExploreSpace from "./components/ExploreSpace/ExploreSpace.jsx";
import SpacesContext, { SpacesProvider } from './spaceContext.jsx';

function App() {
  const [notes, setNotes] = useState([]);
  const [onExploreSpace, setOnExploreSpace] = useState(false);
  const location = useLocation(); // Get current location from routing context

  // Update onExploreSpace based on the current route
  useEffect(() => {
    setOnExploreSpace(location.pathname.startsWith('/explore-space'));
  }, [location]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  function pinNote(id) {
    const pinnedNote = notes[id];
    setNotes(prevNotes => {
      const updatedNotes = prevNotes.filter((_, index) => index !== id);
      return [pinnedNote, ...updatedNotes];
    });
  }

  return (
    <>
      <Header />
      <div className="container-1">
        <Routes>
          <Route path='/add-space-popup' element={<SpacePopup />} />
          <Route path='/space-list' element={<ListSpaces />} />  
          <Route path='/explore-space/:id' element={<ExploreSpace />} />  
          <Route
            path='/'
            element={
              !onExploreSpace ? <NoteArea onAdd={addNote} /> : null
            }
          />
        </Routes>
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onAdd={addNote}
            onPin={pinNote}
          />
        ))}
      </div>
      <AddSpace />
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <SpacesProvider>
      <App />
    </SpacesProvider>
  );
}

export default AppWrapper;