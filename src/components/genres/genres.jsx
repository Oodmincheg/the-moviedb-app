import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './genres.css';
import { getGenres } from '../../store/actions/';

class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genresCheck: []
        }
    }

    componentDidMount() {
        this.props.getGenres();
    }


    render() {
        let key = 0;
        const { genres } = this.props;
        return (
            <div
                className='mdb-container-form__genres-list'
                onClick={this.props.onClickHandler}
            >
                {genres.map(genre =>
                    <div
                        className='mdb-container-form__genres-item'
                        key={key++}
                    >
                        <input
                            className='mdb-container-form__check-genre'
                            type='checkbox'
                            key={genre.id}
                            name='genre'
                            value={genre.name}
                            onChange={this.props.onChange}
                        />
                        <label key={genre.name}>{genre.name}</label>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        genres: state.genresReducer.genres
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGenres: bindActionCreators(getGenres, dispatch)
    }
}

export const GenresList = connect(mapStateToProps, mapDispatchToProps)(Genres);