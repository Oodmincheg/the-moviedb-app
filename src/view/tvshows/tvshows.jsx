import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTvShows } from '../../store/actions';
import { Poster } from '../../components/poster';
import { Search } from '../../components/search';
import { AddMovieForm } from '../../components/add-movie';
import { Preloader } from '../../components/preloader';
import { addCustomTvshow } from '../../store/actions';
import '../movies/movies.css';

class TvShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  componentDidMount() {
    this.props.fetchTvShows();
  }

  handleSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    const { tvShows, isLoaded } = this.props;
    let filteredTvShows = tvShows.filter((tvShow) => {
      return tvShow.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    })
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
            <AddMovieForm addCustomMovie={this.props.addCustomTvshow} />
          </div>
          <div className='mdb-container-movies__inner'>
            {filteredTvShows.map(tvShow =>
              <Poster
                className='mdb-container-movies__poster'
                src={tvShow.poster}
                key={tvShow.id}
                alt={tvShow.title}
                title={tvShow.title}
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
    tvShows: state.tvShowsReducer.tvShows,
    isLoaded: state.tvShowsReducer.isLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTvShows: bindActionCreators(fetchTvShows, dispatch),
    addCustomTvshow: (item) => {
      dispatch(addCustomTvshow(item));
    }
  }
}

export const TvShowsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TvShows);