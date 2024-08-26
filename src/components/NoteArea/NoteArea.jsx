import React, { useState } from "react";
import './NoteArea.css'

function NoteArea(props) {

  const [note, setNote] = useState({title:'', content:''})

  function handleChange(event){
    const{name, value} = event.target;

    setNote(prevNote=>{
      return{
        ...prevNote,
        [name]: value
      };
    })
  }

  function addNote(event){
    props.onAdd(note);
    setNote({title:'', content:''})
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input className='tilte'name='title' 
        value={note.title}  
        placeholder="Title" 
        onChange={handleChange}/>
        <textarea
        className="content"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />        
        <button onClick={addNote}>+</button>
      </form>
    </div>
  );
}

export default NoteArea;
