import React from 'react';
import './card.css';

const Card = ({name, position, id, image}) => {
  return (
    <div className='tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='player' src={image}/>
      <div>
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Card;
