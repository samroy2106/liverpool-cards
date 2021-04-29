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
              </div>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
