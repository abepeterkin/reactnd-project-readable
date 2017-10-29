import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import './modal.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
