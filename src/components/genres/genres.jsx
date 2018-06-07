import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './genres.css';
import { getGenres } from '../../store/actions/';

class Genres extends Component {

	componentDidMount() {
		this.props.getGenres();
	}

	render() {
		let key = 0;
		const { genres, compareGenres, disabled } = this.props;
		return (
			<div
				className='mdb-genres__list'
				onClick={this.props.onClickHandler}
			>
				{genres.map(genre =>
					<div
						className='mdb-genres__item'
						key={key++}
					>
						<input
							className='mdb-genres__check-area'
							type='checkbox'
							key={genre.id}
							name='genre'
							value={genre.name}
							onChange={this.props.onChange}
							checked={compareGenres &&
								compareGenres.map((item) => {
									return item === genre.name;
								}).includes(true)
							}
							readOnly={true}
							disabled={disabled}
						/>
						<label key={genre.name}>{genre.name}</label>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		genres: state.genresReducer.genres
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getGenres: () =>{
			dispatch(getGenres());
		}
	};
};

export const GenresList = connect(mapStateToProps, mapDispatchToProps)(Genres);