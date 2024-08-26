import React, { useContext } from 'react';
import SpacesContext from '../../spaceContext.jsx';
import Space from '../Space/Space';
import './ListSpaces.css';
import { useNavigate } from 'react-router-dom';

function ListSpaces() {
    const { spaces, onExSpaces, setOnExSpaces } = useContext(SpacesContext);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
        onExSpaces(true)
    }

    const handleSpaceClick = (id, title) => {
        navigate(`/explore-space/${id}`, { state: { title } })
        console.log(id, title);
    }

    return (
        <div className='list-container'>
            <div className='cross'>
                <img src="src/assets/cross.svg" alt="" id='cross' onClick={handleClick} />
            </div>
            <h2 className='title'>Your Note-Spaces</h2>
            <div className='space-list'>
                {spaces.map((space, index) => (
                    <Space
                        key={index}
                        id={index}
                        title={space.title}
                        date={space.date}
                        onClick={() => handleSpaceClick(index, space.title)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListSpaces;