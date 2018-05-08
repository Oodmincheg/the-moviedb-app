import React, { Component } from 'react';
import { MovieList } from './view/movies'
import { Sidebar } from './components/sidebar';
import { TopNavigation } from './components/top-navigation';
import { TvShowsList } from './view/tvshows';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import './assets/fontawesome-free-5.0.12/web-fonts-with-css/css/fontawesome-all.min.css';

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className='mdb-container__main' >
          <TopNavigation />
          <Sidebar />
          <Route exact path='/' component={MovieList} />
          <Route path='/movies' component={MovieList} />
          <Route path='/tvshows' component={TvShowsList} />
        </div>
      </HashRouter>
    );
  }
}