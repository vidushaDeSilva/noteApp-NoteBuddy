import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SpacePopup.css';
import SpacesContext from '../../spaceContext.jsx'; import crossIcon from '../../assets/cross.svg';


function SpacePopup() {
  const navigate = useNavigate();
  const notify = () => toast("New note-space created!");
  const { spaces, setSpaces, setSpaceNotes } = useContext(SpacesContext);
  const [title, setTitle] = useState('');

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function updateSpaceNote(title) {
    setSpaceNotes(prevNotes => ({
      ...prevNotes,
      [title]: [] // Initialize an empty array for the new space
    }));
  }

  function handleClick() {
    if (title.trim() === '') return; // Prevent empty titles
    const date = getCurrentDate();
    setSpaces(prevSpaces => [
      ...prevSpaces,
      { title, date }
    ]);
    notify();
    updateSpaceNote(title);
    setTitle('');
  }

  return (
    <div className='popup-container'>
      <div className='popup-form'>
        <div><img src={crossIcon} alt="Close" id='cross' onClick={() => navigate('/')} /></div>
        <p className='popup-title'>Give your note-space a name</p>
        <div>
          <input
            type="text"
            placeholder='Enter your space name'
            className='title-input'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <button className='popup-button' onClick={handleClick}>Create space</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default SpacePopup;