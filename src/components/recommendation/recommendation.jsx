import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Poster } from '../poster';
import { Link } from 'react-router-dom';
import './recommendation.scss';

export class Recommendation extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className='mdb-recommended'>
        <div className='mdb-recommended__movies'>
          {items.map(item => {
            let linkTo;
            if (item.type === 'movie') {
              linkTo = `/movies/${item.id}`;
            } else {
              linkTo = `/tvshows/${item.id}`;
            }
            return (
              <Link to={linkTo} key={item.id} >
                <Poster
                  item={item}
                  style={item.poster}
                  key={item.id / 2}
                  alt={item.title}
                  width='110px'
                  height='165px'
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}