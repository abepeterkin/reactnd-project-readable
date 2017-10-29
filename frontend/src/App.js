import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage.js'
import PostPage from './components/PostPage.js'
import CategoryPage from './components/CategoryPage.js'
import NavBar from './components/NavBar.js'

//url parameters are accs
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:category/:id" component={PostPage} />
        <Route exact path="/:category" component={CategoryPage} />
      </div>
    );
  }
}

export default App;
