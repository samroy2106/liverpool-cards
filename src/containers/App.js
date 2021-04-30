import React from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import { players } from './players';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.setState({ players: players});
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const { players, searchfield } = this.state;
    const filteredPlayers = players.filter(player =>{
      return player.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Liverpool Squad</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList players={filteredPlayers}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
