import React from 'react';
import './search.css';

export const Search = () => {
	return (
		<div className='mdb-container-movies__search'>
			<input className='mdb-container-movies__search-input'
				type='text'
				placeholder='Search...'
			/>
			<button className='mdb-container-form__search-button'>Ok</button>
		</div>
	);
};