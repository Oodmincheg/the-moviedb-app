import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from './store/actions';
import { baseUrl } from './constants';
import { Poster } from './components/poster';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props);
    const { movies } = this.props;
    return (
      <div className="App">
        {movies.map(movie =>
          <Poster
            className='mdb-movies'
            src={baseUrl + movie.poster_path}
            key={movie.id}
            alt={movie.title}
          />
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
    fetchMovies: bindActionCreators(fetchMovies, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);