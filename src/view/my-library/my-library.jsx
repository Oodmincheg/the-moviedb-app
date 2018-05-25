import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmptyLibrary } from '../../components/empty-library';
import { Poster } from '../../components/poster';
import {
  initializeMyLibrary,
  removeMovieFromLibrary,
  removeTvShowFromLibrary
} from '../../store/actions';
import { Link } from 'react-router-dom';
import './my-library.css';

export class MyLibrary extends Component {
  constructor(props) {
    super(props)
    this.props.initializeMyLibrary();
  }

  render() {
    let { myLibrary, isSidebarOpen } = this.props;
    if (myLibrary.length === 0) {
      return (
        <EmptyLibrary />
      );
    } else {
      return (
        <div className='mdb-library'>
          <div className={isSidebarOpen ?'mdb-library__view':'mdb-library__view mdb-library__view--wider'}>
            {myLibrary.map(m => {
              let linkTo;
              if (m.type === 'movie') {
                linkTo = `/movies/${m.id}`
              } else {
                linkTo = `tvshows/${m.id}`
              }
              return (
                <Link
                  to={linkTo}
                  key={m.id + m.title}
                >
                  <Poster
                    style={m.poster}
                    key={m.id}
                    item={m}
                    alt={m.title}
                    title={m.title}
                    removeItemFromLibrary={
                      m.type === 'tvshow' ?
                        this.props.removeTvShowFromLibrary :
                        this.props.removeMovieFromLibrary
                    }
                  />
                </Link>
              );
            })}
          </div>
        </div>
      );
    }

  }
};

export const mapStateToProps = (state) => {
  return {
    myLibrary: state.libraryReducer.libraryArray,
    isSidebarOpen: state.sidebarReducer.isSidebarOpen
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    initializeMyLibrary: () => {
      dispatch(initializeMyLibrary());
    },
    removeMovieFromLibrary: (item) => {
      dispatch(removeMovieFromLibrary(item));
    },
    removeTvShowFromLibrary: (item) => {
      dispatch(removeTvShowFromLibrary(item));
    }
  }
}

export const Library = connect(mapStateToProps, mapDispatchToProps)(MyLibrary);