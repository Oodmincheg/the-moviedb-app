import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTvShows } from '../../store/actions';
import { getItemFromLocalStorage } from '../../services';
import { GenresList } from '../../components/genres';
import './tvshowdetail.scss';

export class TvShowDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			genresFromLS: getItemFromLocalStorage('genres'),
			tvShow: {},
			recommended: []
		}

	}

	initTvShowAndRecommended(id) {
		let tvShows = getItemFromLocalStorage('tvShows').filter(tvshow => tvshow.id === parseInt(id, 10));
		this.setState(() => ({
			tvShow: tvShows[0]
		}));
	}

	componentWillMount() {
		this.initTvShowAndRecommended(this.props.match.params.id);
	}

	render() {
		const tvShow = this.state.tvShow;
		let genres = this.state.genresFromLS.filter(genre => tvShow.genre_ids.includes(genre.id));
		return (
			<div className='mdb-details__view'>
				<div className='mdb-details__wrapper'>
					<img
						className='mdb-details__backdrop'
						src={tvShow.backdrop}
						alt={tvShow.title}
					/>
					<div className='mdb-details__movie-info'>
						<h2 className='mdb-details__title'>{tvShow.title}</h2>
						<div className='mdb-details__overview'>
							<p className=''>{tvShow.overview}</p>
							<p>{tvShow.overview}</p>
							<p>{tvShow.overview}</p>
							<p>{tvShow.overview}</p>
						</div>
					</div>
					<p>Genre</p>
					<GenresList compareGenres={genres.map(genre => genre.name)} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tvShows: state.tvShowsReducer.tvShows
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTvShows: () => {
			dispatch(fetchTvShows());
		}
	}
}

export const TvShowDetailsPage = connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);