import React from 'react';
import { connect } from 'react-redux';
import { topNavigation } from '../../data';
import './top-navigation.css';

const Navigation = ({ items }) => (
    <div className='mdb-top'>
        <div className='mdb-top__navigation' >
            {items.map(item =>
                <a
                    href='#'
                    key={item.label}
                >
                    {item.label}
                </a>
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        items: topNavigation
    }
}

export const TopNavigation = connect(mapStateToProps)(Navigation);
