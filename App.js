import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainNavigation from './components/main/mainNavigtion'
import Champs from './components/Champs/champs';
import InfoChamp from './components/Champs/infoChamp'

export default class App extends Component {
  render() {
    return (
        <MainNavigation/>
        //<Champs/>
        //<InfoChamp/>
    );
  }
}

