// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AddSpace.css'

// function AddSpace() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <button className="space-button" onClick={()=>navigate('/add-space-popup')}>Create a space +</button>
//       <button className='spaces-button' onClick={()=>navigate('/space-list')}>
//         Explore your note-spaces
//         <img src="src/assets/book.svg" alt="" id='book'/>
//         </button>
//     </div>
//   );
// }

// export default AddSpace;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddSpace.css';

function AddSpace() {
  const navigate = useNavigate();

  return (
    <div>
      <button className="space-button" onClick={() => navigate('/add-space-popup')}>Create a space +</button>
      <button className='spaces-button' onClick={() => navigate('/space-list')}>
        Explore your note-spaces
        <img src="src/assets/book.svg" alt="" id='book' />
      </button>
    </div>
  );
}

export default AddSpace;