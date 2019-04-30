import React,{Component} from 'react'
import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
} from 'react-navigation'
import All from '../filterChamp/All';
import Tank from '../filterChamp/tank';
import Fighter from '../filterChamp/fighter';
import Assassin from '../filterChamp/assassin';
import Mage from '../filterChamp/mage';
import Marksman from '../filterChamp/marksman';
import Support from '../filterChamp/support';
import InfoChamp from '../filterChamp/infoChamp';
export default createAppContainer(createDrawerNavigator({
    All:{
        screen:All
    },
    Tank:{
        screen:Tank
    },
    Fighter:{
        screen:Fighter
    },
    Assassin:{
        screen:Assassin
    },
    Mage:{
        screen:Mage
    },
    Marksman:{
        screen:Marksman
    },
    Support:{
        screen:Support
    },
    InfoChamp:{
        screen:InfoChamp
    }, 
},{
    intialRouteName: 'Home',
    // navigationOptions: {
    //   headerStyle : {
    //     backgroundColor: '#f4511e',
    //   },
    //   headerTintColor: '#fff',
    //   headerTitleStyle : {
    //     color: 'white',
    //   },
    // },
  }))