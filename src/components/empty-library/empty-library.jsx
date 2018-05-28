import React from 'react';
import './empty-library.css';

export const EmptyLibrary = () => {
  return (
    <div className='mdb-container__empty-library'>
      <img
        className='mdb-container__sad-cat'
        src='https://pp.userapi.com/c844418/v844418457/48500/eL1kSUUOQnQ.jpg'
        alt='empty library'
      />
      <h3>No movies in library</h3>
    </div>
  );
};