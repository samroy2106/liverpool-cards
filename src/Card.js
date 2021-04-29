import React from 'react';

const Card = ({name, position, id}) => {
  return (
    <div className='tc bg-red dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='alisson' src='https://e0.365dm.com/20/09/1600x900/skysports-alisson-liverpool_5108075.jpg?20200925131522'/>
      <div>
        <h2>{name}</h2>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Card;
