import React,{Component} from 'react'
import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation'
//Fighter/Tank/Mage/Assassin/Support
import Champs from '../Champs/champs';
import InfoChamp from '../Champs/infoChamp'
export default createAppContainer(createStackNavigator({
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