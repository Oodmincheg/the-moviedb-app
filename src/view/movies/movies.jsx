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
  removeMovieFromLibrary,
  initializeMyLibrary
} from '../../store/actions';
import { Link } from 'react-router-dom';
import './movies.css';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.props.initializeMyLibrary();
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  handleSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    const { movies, isLoaded, isSidebarOpen } = this.props;
    let filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });
    if (!isLoaded) {
      return <Preloader className='mdb-spinner' />;
    } else {
      return (
        <div className='mdb-movies'>
          <div className={isSidebarOpen ? 'mdb-movies__wrapper' : 'mdb-movies__wrapper mdb-movies__wrapper--wider'}>
            <div
              className='mdb-movies__search'
              onChange={this.handleSearch.bind(this)}
            >
              <Search />
            </div>
            <div>
              <AddMovieForm addCustomMovie={this.props.addCustomMovie} />
            </div>
            <div className='mdb-movies__inner'>
              {filteredMovies.map(movie =>
                <Link
                  to={`/movies/${movie.id}`}
                  key={movie.id * 2}
                >
                  <Poster
                    style={movie.poster}
                    key={movie.id}
                    alt={movie.title}
                    item={movie}
                    addItemToLibrary={this.props.addItemToLibrary}
                    removeItemFromLibrary={this.props.removeItemFromLibrary}
                  >
                  </Poster>
                </Link>
              )}
            </div>
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
    myLibrary: state.libraryReducer.libraryArray,
    isSidebarOpen: state.sidebarReducer.isSidebarOpen
  };
};

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
      dispatch(removeMovieFromLibrary(item));
    },
    initializeMyLibrary: () => {
      dispatch(initializeMyLibrary());
    }
  };
};

export const MovieList = connect(mapStateToProps, mapDispatchToProps)(Movies);