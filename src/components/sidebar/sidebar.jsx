import React from 'react';
import './sidebar.css';
import {sidebarNavigation} from '../../data'
import {connect} from 'react-redux';
// import { Link } from 'react-router-dom';

const Sidebar = ({ items, isOpened }) => {
    return (
        <div className='mdb-sidebar'>
            <div
                className={isOpened ?
                    'mdb-sidebar__wrapper' :
                    'mdb-sidebar__wrapper mdb-sidebar__wrapper-close'}
                id='mdb-wrapper'
            >
                <div className='mdb-sidebar__toggle' id='mdb-togle'>
                    <i
                        className="fa fa-bars fa-2x"
                        aria-hidden="true"
                    ></i>
                </div>
                <span className='mdb-sidebar__logo'>
                    <i
                        className="fa fa-video-camera fa-2x"
                        aria-hidden="true">
                    </i> Logo
                    </span>
                <div className='mdb-sidebar__navigation'>
                    {items.map((item, index) =>
                        <a
                            href='#'
                            className='mdb-sidebar__links'
                            key={index}
                        >
                            <i className={item.icon} />
                            {item.label}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: sidebarNavigation
    }
}

export const AppSidebar = connect(mapStateToProps)(Sidebar);