import React from 'react';
import './cardStyle.css'
import Card from '../card/crard-component';

const Cardlist = (props) => {
    return (
        <div className='card-list'>
      { props.character.map((character,i) =>
      <Card key={character.id} character={character}/>)}
        </div>
    );
};

export default Cardlist;