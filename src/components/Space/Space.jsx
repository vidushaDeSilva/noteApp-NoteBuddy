import React from 'react';
import './Space.css';

function Space(props) {
  return (
    <>
      <div className='space-container' onClick={props.onClick}>
        <h3 id='title'>
          <img src="src/assets/book_icon.jpg" alt="" id='book-bullet' />
          {props.title}
        </h3>
        <div className='date'><h3>{props.date}</h3></div>
      </div>
      <hr className='breaker' />
    </>
  );
}

export default Space;