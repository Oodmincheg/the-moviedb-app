import React, { Component } from 'react';
import './sidebar.css';
import './../../assets/font-awesome-4.7.0/css/font-awesome.min.css';
// import { Link } from 'react-router-dom';

export const SidebarList = ({ items, isOpened }) => {
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