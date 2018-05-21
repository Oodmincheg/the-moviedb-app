import React, { Component } from 'react';
import './tvshow-details.css';
import { connect } from 'react-redux';
import { fetchTvShows } from '../../store/actions';

export class TvShowDetails extends Component {
    constructor(props) {
        super(props)
        this.props.fetchTvShows();
    }
    render() {
        const tvShow = this.props.tvShows.filter(t => t.id == this.props.match.params.id);
        return (
            <div className='mdb-tvshow__details'>
                {tvShow.map(t =>
                    <div
                        className='mdb-tvshow__info'
                        key={t.id}
                    >
                        <img
                            src={t.backdrop}
                            alt={t.title}
                            key={t.id * 2}
                        />
                        <h1 key={t.id / 2}>{t.title}</h1>
                    </div>
                )}
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