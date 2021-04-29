import React from 'react';

const Searchbox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--yellow  bg-light-yellow'
        type='search'
        placeholder='Search players'
        onChange={searchChange} />
    </div>
  );
}

export default Searchbox;
