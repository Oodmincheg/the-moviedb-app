import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/actions';
import './sidebar.css';

export const SidebarComponent = ({ isSidebarOpen, toggleSidebar }) => {
	return (
		<div className='mdb-sidebar'>
			<div
				className={isSidebarOpen ?
					'mdb-sidebar__wrapper' :
					'mdb-sidebar__wrapper mdb-sidebar__wrapper--close'}
				id='mdb-wrapper'
			>
				<div className='mdb-sidebar__toggle' id='mdb-togle'>
					<i
						className="fa fa-bars"
						aria-hidden="true"
						onClick={toggleSidebar}
					></i>
					<span className={isSidebarOpen ? 'mdb-sidebar__logo' : 'mdb-sidebar__logo hide-items'}>
						<i
							className="fas fa-th-large"
							aria-hidden="true">
						</i>
						<span className='mdb-sidebar__logo-title'>Logo</span>
					</span>
				</div>
				<div className='mdb-sidebar__navigation'>
					<NavLink
						href='#'
						className='mdb-sidebar__links'
						to='/movies'
						activeClassName='active-link'
					>
						<i className='fa fa-film' />
						<span className={isSidebarOpen ?
							'mdb-sidebar__link-to' :
							'mdb-sidebar__link-to hide-items'
						}>Movies</span>
					</NavLink>
					<NavLink
						href='#'
						className='mdb-sidebar__links'
						to='/tvshows'
						activeClassName='active-link'
					>
						<i className='fa fa-desktop' />
						<span className={isSidebarOpen ?
							'mdb-sidebar__link-to' :
							'mdb-sidebar__link-to hide-items'
						}>Tv Shows</span>
					</NavLink>
					<NavLink
						href='#'
						className='mdb-sidebar__links'
						to='/library'
						activeClassName='active-link'
					>
						<i className='fa fa-book' />
						<span className={isSidebarOpen ?
							'mdb-sidebar__link-to' :
							'mdb-sidebar__link-to hide-items'
						}>My Library</span>
					</NavLink>
					<NavLink
						href='#'
						className='mdb-sidebar__links'
						to='/support'
						activeClassName='active-link'
					>
						<i className='fa fa-info-circle' />
						<span className={isSidebarOpen ?
							'mdb-sidebar__link-to' :
							'mdb-sidebar__link-to hide-items'
						}>Support</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		isSidebarOpen: state.sidebarReducer.isSidebarOpen
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleSidebar: () => {
			dispatch(toggleSidebar());
		}
	}
}

export const Sidebar = withRouter(connect(mapStatetoProps, mapDispatchToProps)(SidebarComponent));