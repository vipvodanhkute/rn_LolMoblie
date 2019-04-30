import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import MainNavigation from './components/main/mainNavigtion'


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <MainNavigation/>
        </Provider>
    );
  }
}

