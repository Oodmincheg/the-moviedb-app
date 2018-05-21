import React, { Component } from 'react';
import './movie-details.css';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions';

export class MovieDetails extends Component {
    constructor(props) {
        super(props)
        this.props.fetchMovies();
    }
    render() {
        const movie = this.props.movies.filter(m => m.id == this.props.match.params.id);
        return (
            <div className='mdb-movie__details'>
                {movie.map(m =>
                    <div
                        className='mdb-movie__info'
                        key={m.id}
                    >
                        <img
                            src={m.backdrop}
                            alt={m.title}
                            key={m.id * 2}
                        />
                        <h1 key={m.id / 2}>{m.title}</h1>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => {
            dispatch(fetchMovies());
        }
    }
}

export const MovieDetailsPage = connect(mapStateToProps, mapDispatchToProps)(MovieDetails);