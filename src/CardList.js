import React from 'react';
import Card from './Card';


const CardList = ({ players }) => {

  return (
    <div>
    {
      players.map((user, i) => {
        return (
          <Card
            key={i}
            id={players[i].id}
            name={players[i].name}
            position={players[i].position}
            image={players[i].image}/>
         );
       })
    }
    </div>
  );
}

export default CardList;
