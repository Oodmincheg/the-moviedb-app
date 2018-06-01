import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Poster } from '../../components/poster';
import { Search } from '../../components/search';
import { AddMovieForm } from '../../components/add-movie';
import { Preloader } from '../../components/preloader';
import { Link } from 'react-router-dom';
import {
  addCustomTvshow,
  fetchTvShows,
  addTvShowToLibrary,
  removeTvShowFromLibrary,
  initializeMyLibrary
} from '../../store/actions';
import '../movies/movies.css';

class TvShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.props.initializeMyLibrary();
  }

  componentDidMount() {
    this.props.fetchTvShows();
  }

  handleSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    const { tvShows, isLoaded, isSidebarOpen } = this.props;
    let filteredTvShows = tvShows.filter((tvShow) => {
      return tvShow.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
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
              <AddMovieForm addCustomMovie={this.props.addCustomTvshow} />
            </div>
            <div className='mdb-movies__inner'>
              {filteredTvShows.map(tvShow =>
                <Link
                  to={`/tvshows/${tvShow.id}`}
                  key={tvShow.id * 2}
                >
                  <Poster
                    style={tvShow.poster}
                    key={tvShow.id}
                    item={tvShow}
                    alt={tvShow.title}
                    title={tvShow.title}
                    addItemToLibrary={this.props.addItemToLibrary}
                    removeItemFromLibrary={this.props.removeItemFromLibrary}
                  ></Poster>
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
    tvShows: state.tvShowsReducer.tvShows,
    isLoaded: state.tvShowsReducer.isLoaded,
    myLibrary: state.libraryReducer.libraryArray,
    isSidebarOpen: state.sidebarReducer.isSidebarOpen
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTvShows: () => {
      dispatch(fetchTvShows());
    },
    addCustomTvshow: (item) => {
      dispatch(addCustomTvshow(item));
    },
    addItemToLibrary: (item) => {
      dispatch(addTvShowToLibrary(item));
    },
    removeItemFromLibrary: (item) => {
      dispatch(removeTvShowFromLibrary(item));
    },
    initializeMyLibrary: () => {
      dispatch(initializeMyLibrary());
    }
  };
};

export const TvShowsList = connect(mapStateToProps, mapDispatchToProps)(TvShows);