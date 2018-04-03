import React, { Component } from 'react';
import { MovieList } from './components/movies'
import { AppSidebar } from './components/sidebar';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div>
        <AppSidebar />
        <MovieList />
      </div>
    );
  }
}