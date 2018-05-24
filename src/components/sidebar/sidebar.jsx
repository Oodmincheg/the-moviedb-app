import React from 'react';
import { sidebarNavigation } from '../../data'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSidebar } from '../../store/actions';
import './sidebar.css';

export const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className='mdb-sidebar'>
            <div
                className={isSidebarOpen ?
                    'mdb-sidebar__wrapper' :
                    'mdb-sidebar__wrapper mdb-sidebar__wrapper-close'}
                id='mdb-wrapper'
            >
                <div className='mdb-sidebar__toggle' id='mdb-togle'>
                    <i
                        className="fa fa-bars fa-2x"
                        aria-hidden="true"
                        onClick={toggleSidebar}
                    ></i>
                </div>
                <span className='mdb-sidebar__logo'>
                    <i
                        className="fa fa-video-camera fa-2x"
                        aria-hidden="true">
                    </i> Logo
                    </span>
                <div className='mdb-sidebar__navigation'>
                        <NavLink
                            href='#'
                            className='mdb-sidebar__links'
                            to='/movies'
                            activeClassName='active-link'
                        >
                            <i className='fa fa-film'/>
                            Movies
                        </NavLink>
                        <NavLink
                            href='#'
                            className='mdb-sidebar__links'
                            to='/tvshows'
                            activeClassName='active-link'
                        >
                            <i className='fa fa-desktop'/>
                            TV Shows
                        </NavLink>
                        <NavLink
                            href='#'
                            className='mdb-sidebar__links'
                            to='/library'
                            activeClassName='active-link'
                        >
                            <i className='fa fa-book'/>
                            My Library
                        </NavLink>
                        <NavLink
                            href='#'
                            className='mdb-sidebar__links'
                            to='/support'
                            activeClassName='active-link'
                        >
                            <i className='fa fa-info-circle'/>
                            Support
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

export const SidebarComponent = connect(mapStatetoProps, mapDispatchToProps)(Sidebar);