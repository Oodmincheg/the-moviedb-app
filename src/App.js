import React, { Component } from 'react';
import { MovieList } from './components/movies'
import { AppSidebar } from './components/sidebar';
import { TopNavigation } from './components/top-navigation';
import { TvShowsList } from './components/tvshows';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <TopNavigation />
          <AppSidebar/>
          <Route exact path='/' component={MovieList} />
          <Route path='/movies' component={MovieList} />
          <Route path='/tvshows' component={TvShowsList} />
        </div>
      </HashRouter>
    );
  }
}