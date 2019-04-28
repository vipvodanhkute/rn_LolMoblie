import React, { Component } from 'react'
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
export default class Champ extends Component {
  constructor(props) {
    super(props);
  }
  _onPress=()=>{
    this.props.navigation.navigate('infoChamp',{name:this.props.infoChamp.name})
  }
  render() {
    const img = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';
    const img2 = this.props.infoChamp.image.full;
    const img3 = img + img2;
    return (
      <TouchableOpacity
      onPress={()=>this._onPress()}
      >
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{ uri: img3 }}
        />
        <Text style={styles.text}>{this.props.infoChamp.name}</Text>
      </View>
        </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginRight:5,
    marginBottom:5,
    flex:1,
    borderWidth:5,
    borderColor:'gray',
    alignItems:'center'
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    //textAlign: 'center'
  }
})
