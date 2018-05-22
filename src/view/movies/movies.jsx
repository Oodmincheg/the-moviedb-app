import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Poster } from '../../components/poster';
import { Search } from '../../components/search';
import { AddMovieForm } from '../../components/add-movie';
import { Preloader } from '../../components/preloader';
import {
  addCustomMovie,
  fetchMovies,
  addMovieToLibrary,
  removeMovieFromLibrary
} from '../../store/actions';
import { Link, NavLink } from 'react-router-dom';
import './movies.css';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handleSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    const {
      movies, isLoaded } = this.props;
    let filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    if (!isLoaded) {
      return <Preloader className='mdb-spinner' />
    } else {
      return (
        <div className='mdb-container-movies'>
          <div
            className='mdb-container-movies__inner mdb-container-movies__inner-search'
            onChange={this.handleSearch.bind(this)}
          >
            <Search />
          </div>
          <div>
            <AddMovieForm addCustomMovie={this.props.addCustomMovie} />
          </div>
          <div className='mdb-container-movies__inner' >
            {filteredMovies.map(movie =>
              <Link  
              to={`/movies/${movie.id}`}
              key={movie.id*2}
              >
                <Poster
                  style={movie.poster}
                  key={movie.id}
                  alt={movie.title}
                  item={movie}
                  addItemToLibrary={this.props.addItemToLibrary}
                  removeItemFromLibrary={this.props.removeItemFromLibrary}
                >
                  {/* <div className='mdb-container-movies__title'>{movie.title}</div> */}
                </Poster>
              </Link>
            )}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesReducer.movies,
    isLoaded: state.moviesReducer.isLoaded,
    myLibrary: state.libraryReducer.libraryArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    },
    addCustomMovie: (item) => {
      dispatch(addCustomMovie(item));
    },
    addItemToLibrary: (item) => {
      dispatch(addMovieToLibrary(item));
    },
    removeItemFromLibrary: (item) => {
      dispatch(removeMovieFromLibrary(item))
    }
  }
}

export const MovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);