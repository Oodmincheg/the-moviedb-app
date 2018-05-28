import React from 'react';
import { connect } from 'react-redux';
import { toggleForm } from '../../store/actions';
import './top-navigation.css';

export const Navigation = ({ isOpened, toggleForm }) => {
	return (
		<div className='mdb-top-navigation'>
			<div className='mdb-top-navigation__links' >
				<a
					className={isOpened ?
						'mdb-top-navigation__item mdb-top-navigation__item--active' :
						'mdb-top-navigation__item'
					}
					href=''
					onClick={toggleForm}
				>
					Add Movie
            </a>
				<a
					className='mdb-top-navigation__item'
					href=''
				>
					About
            </a>
			</div>
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		isOpened: state.formReducer.isFormOpen
	};
};

const mapDispatchToProps = (dispatch) => ({
	toggleForm: (e) => {
		dispatch(toggleForm());
		e.preventDefault();
	}
});

export const TopNavigation = connect(mapStateToProps, mapDispatchToProps)(Navigation);