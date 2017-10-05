import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage.js'
import PostPage from './components/PostPage.js'
import EditPage from './components/EditPage.js'
import CategoryPage from './components/CategoryPage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <MainPage />
        )}/>
        <Route exact path="/category/:category" render={() => (
          <CategoryPage />
        )}/>
        <Route exact path="/post/:id" render={() => (
          <PostPage />
        )}/>
        <Route exact path="/edit" render={() => (
          <EditPage />
        )}/>
      </div>
    );
  }
}

export default App;
