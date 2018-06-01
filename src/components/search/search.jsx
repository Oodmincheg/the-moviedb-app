import React from 'react';
import './search.scss';

export const Search = () => {
	return (
		<div className='mdb-movies__search right-icon'>
			<button
				type='sumbit'
				className='mdb-form__search-button'
				value='Ok'
			>
				<i className="fas fa-search"></i>
			</button>
			<input
				className='mdb-movies__search-input'
				type='text'
				placeholder='Search...'
			/>
		</div>
	);
};