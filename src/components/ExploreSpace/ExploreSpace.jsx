import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SpacesContext from '../../spaceContext.jsx';
import Note from '../Note/Note';
import NoteArea from '../NoteArea/NoteArea.jsx';
import './ExploreSpace.css'
import crossIcon from '../../assets/cross.svg';

function ExploreSpace() {
    const { id } = useParams(); // Get the space ID from the route
    const { spaceNotes, setSpaceNotes } = useContext(SpacesContext);
    const location = useLocation();
    const title = location.state?.title; // Access the title from the state

    // Get the notes for the specific space
    const notesForSpace = spaceNotes[id] || [];

    function addNote(newNote) {
        setSpaceNotes(prevNotes => ({
            ...prevNotes,
            [id]: [...(prevNotes[id] || []), newNote] // Ensure it works even if prevNotes[id] is undefined
        }));
    }

    function deleteNote(noteId) {
        setSpaceNotes(prevNotes => ({
            ...prevNotes,
            [id]: prevNotes[id].filter((_, index) => index !== noteId) // Remove the specific note
        }));
    }

    function pinNote(noteId) {
        const pinnedNote = notesForSpace[noteId];
        setSpaceNotes(prevNotes => ({
            ...prevNotes,
            [id]: [pinnedNote, ...prevNotes[id].filter((_, index) => index !== noteId)] // Pin the note to the top
        }));
    }

    return (
        <div className='container'>
            <div className='title'>{`${title}`}</div>
            <img src={crossIcon} alt="Close" id='cross' onClick={() => navigate('/')} />
            <NoteArea onAdd={addNote} />
            <div className='container-notes'>
                {notesForSpace.map((noteItem, index) => (
                    <Note
                        key={noteItem.id || index} // Use a unique identifier if available
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={() => deleteNote(index)}
                        onAdd={addNote}
                        onPin={() => pinNote(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExploreSpace;