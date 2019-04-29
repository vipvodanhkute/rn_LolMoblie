import React,{Component} from 'react'
import {
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
} from 'react-navigation'
//Fighter/Tank/Mage/Assassin/Support
import Champs from '../Champs/champs';
import InfoChamp from '../Champs/infoChamp'
export default createAppContainer(createDrawerNavigator({
    // All:
    // Tank:
    // Fighter:
    // Assassin:
    // Mage:
    // Marksman:
    // Support:
    Champs:{
        screen:Champs
    },
    infoChamp:{
        screen:InfoChamp
    },
}))