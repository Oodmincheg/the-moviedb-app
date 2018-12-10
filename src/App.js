import React, { Component } from 'react';
import { MovieList } from './view/movies';
import { Sidebar } from './components/sidebar';
import { TopNavigation } from './components/top-navigation';
import { TvShowsList } from './view/tvshows';
import { Library } from './view/my-library';
import { MovieDetailsPage } from './view/movie-details';
import { TvShowDetailsPage } from './view/tvshow-details';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/fontawesome-free-5.0.12/web-fonts-with-css/css/fontawesome-all.min.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className='mdb-container__main' >
          <TopNavigation />
          <Sidebar />
          <Switch>
            <Route exact path='/' component={MovieList} />
            <Route exact path='/movies' component={MovieList} />
            <Route exact path='/tvshows' component={TvShowsList} />
            <Route exact path='/library' component={Library} />
            <Route exact path='/movies/:id' component={MovieDetailsPage} />
            <Route exact path='/tvshows/:id' component={TvShowDetailsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
