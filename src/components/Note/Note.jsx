// import React from "react";
// import './Note.css'

// function Note(props) {
  
//   function handleClick() {
//     props.onDelete(props.id);
//   }

//   function handlePin() {
//     props.onPin(props.id)
//   }

//   return (
//     <div className="note">
//       <div className="title">
//       <h1>{props.title}</h1>
//       <img src="src/assets/pin.png" alt="" id="pin" onClick={handlePin}/>
//       </div>
//       <p>{props.content}</p>
//       <img src="src/assets/trash-can-outline-svgrepo-com.svg" onClick={handleClick} alt="" />
//     </div>
//   );
// }

// export default Note;


import React from "react";
import './Note.css';

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  function handlePin() {
    props.onPin(props.id);
  }

  return (
    <div className="note">
      <div className="title">
        <h1>{props.title}</h1>
        <img src="src/assets/pin.png" alt="" id="pin" onClick={handlePin}/>
      </div>
      <p>{props.content}</p>
      <img src="src/assets/trash-can-outline-svgrepo-com.svg" onClick={handleClick} alt="" />
    </div>
  );
}

export default Note;