import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage.js'
import PostPage from './components/PostPage.js'
import EditPage from './components/EditPage.js'
import CategoryPage from './components/CategoryPage.js'

//url parameters are accs
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/post/:id" component={PostPage} />
        <Route exact path="/edit" component={EditPage} />
        <Route exact path="/category/:category" component={CategoryPage} />
      </div>
    );
  }
}

export default App;
