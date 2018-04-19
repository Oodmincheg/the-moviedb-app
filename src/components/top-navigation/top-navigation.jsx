import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleForm } from '../../store/actions';
import './top-navigation.css';

export class Navigation extends Component {
    render() {
        return (
            <div className='mdb-top-navigation'>
                <div className='mdb-top-navigation__links' >
                        <a
                            className='mdb-top-navigation__item'
                            href='#'
                            onClick={this.props.toggleForm}
                        >
                            Add Movie
                        </a>
                        <a
                            className='mdb-top-navigation__item'
                            href='#'
                        >
                            About
                        </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isOpened: state.formReducer.isFormOpen
    }
}

const mapDispatchToProps = (dispatch) => ({
    toggleForm: (event) => {
        dispatch(toggleForm())
    }
})

export const TopNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation);