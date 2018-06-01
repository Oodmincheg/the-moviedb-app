import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	fetchTvShows,
	fetchSimilarTvShows,
	initializeMyLibrary
} from '../../store/actions';
import { getItemFromLocalStorage } from '../../services';
import { GenresList } from '../../components/genres';
import { Recommendation } from '../../components/recommendation';
import './tvshowdetail.scss';

export class TvShowDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			genresFromLS: getItemFromLocalStorage('genres'),
			tvShow: {}
		};
		this.props.initializeMyLibrary();
	}

	initTvShow(id) {
		let tvShows = getItemFromLocalStorage('fulltvshows').filter(tvshow => tvshow.id === parseInt(id, 10));
		this.setState(() => ({
			tvShow: tvShows[0]
		}));
	}

	componentDidMount() {
		this.props.fetchSimilarTvShows(this.props.match.params.id);
	}

	componentWillMount() {
		this.initTvShow(this.props.match.params.id);
	}

	componentWillReceiveProps(nextProps) {
		this.initTvShow(nextProps.match.params.id);
	}

	render() {
		const tvShow = this.state.tvShow;
		let genres = this.state.genresFromLS.filter(genre => tvShow.genre_ids.includes(genre.id));
		const { similarTvShows } = this.props;
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
					<h3 className='mdb-details__recommended-title'>We also recommended</h3>
					<Recommendation items={similarTvShows} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		tvShows: state.tvShowsReducer.tvShows,
		similarTvShows: state.tvShowsReducer.similarTvShows
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchTvShows: () => {
			dispatch(fetchTvShows());
		},
		fetchSimilarTvShows: (id) => {
			dispatch(fetchSimilarTvShows(id));
		},
		initializeMyLibrary: () => {
			dispatch(initializeMyLibrary());
		}
	};
};

export const TvShowDetailsPage = connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);