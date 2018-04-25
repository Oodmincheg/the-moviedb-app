import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../store/actions';
import { Poster } from '../poster';
import { Search } from '../search';
import { AddMovieForm } from '../add-movie';
import { Preloader } from '../preloader';
import { addCustomMovie } from '../../store/actions';
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
    const { movies, isLoaded } = this.props;
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
          <div >
            <AddMovieForm addMovie={this.props.addCustomMovie} />
          </div>
          <div className='mdb-container-movies__inner' >
            {filteredMovies.map(movie =>
              <Poster
                className='mdb-container-movies__poster'
                src={movie.poster}
                key={movie.id}
                alt={movie.title}
              />
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
    isLoaded: state.moviesReducer.isLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: bindActionCreators(fetchMovies, dispatch),
    addCustomMovie: (item) => {
      dispatch(addCustomMovie(item));
    }
  }
}

export const MovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);