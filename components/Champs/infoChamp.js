import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ImageBackground,
    Button
} from 'react-native'
export default class InfoChamp extends Component {
    _source=()=>{
        const name=this.props.navigation.state.params.name;
        const url='http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
        const uri=`${url}${name}_0.jpg`;
        return uri
    }
    render() {
        console.log(this._source())
        return (
            <ImageBackground
            style={styles.backgroundImage}
            resizeMode={'cover'}
            source={{uri:this._source()}}
            >
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    backgroundImage:{
        width:'100%',
        flex:1
    }
})