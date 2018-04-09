import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTvShows } from '../../store/actions';
import { baseUrl } from '../../constants';
import { Poster } from '../poster';

class TvShows extends Component {
  componentDidMount() {
    this.props.fetchTvShows();
  }
  render() {
    const { tvShows } = this.props;
    return (
      <div className="App">
        {tvShows.map(tvShow =>
          <Poster
            className='mdb-movies'
            src={baseUrl + tvShow.poster_path}
            key={tvShow.id}
            alt={tvShow.name}
            title={tvShow.original_name}
          />
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
    fetchTvShows: bindActionCreators(fetchTvShows, dispatch)
  }
}

export const TvShowsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TvShows);