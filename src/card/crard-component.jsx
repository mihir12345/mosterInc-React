import React from 'react';
import './card-style.css'

const Card = (props) => {
    return (
        <div className='card-container'>
            <img alt='' src={`https://robohash.org/${props.character.id}?size=200x200`}/>
            <h2>{props.character.name}</h2>
            <p>{props.character.email}</p>
        </div>
    );
};

export default Card;