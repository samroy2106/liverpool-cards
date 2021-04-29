import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { players } from './players';

ReactDOM.render(
              <div>
                <Card id={players[0].id} name={players[0].name} position={players[0].position} image={players[0].image}/>
                <Card id={players[1].id} name={players[1].name} position={players[1].position} image={players[1].image}/>
                <Card id={players[2].id} name={players[2].name} position={players[2].position} image={players[2].image}/>
                <Card id={players[3].id} name={players[3].name} position={players[3].position} image={players[3].image}/>
                <Card id={players[4].id} name={players[4].name} position={players[4].position} image={players[4].image}/>
                <Card id={players[5].id} name={players[5].name} position={players[5].position} image={players[5].image}/>
                <Card id={players[6].id} name={players[6].name} position={players[6].position} image={players[6].image}/>
                <Card id={players[7].id} name={players[7].name} position={players[7].position} image={players[7].image}/>
                <Card id={players[8].id} name={players[8].name} position={players[8].position} image={players[8].image}/>
                <Card id={players[9].id} name={players[9].name} position={players[9].position} image={players[9].image}/>
                <Card id={players[10].id} name={players[10].name} position={players[10].position} image={players[10].image}/>
                <Card id={players[11].id} name={players[11].name} position={players[11].position} image={players[11].image}/>
              </div>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
