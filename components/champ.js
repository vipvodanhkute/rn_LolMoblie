import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
export default class Champ extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const img = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/';
    const img2 = this.props.infoChamp.image.full;
    const img3 = img + img2;
    return (
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{ uri: img3 }}
        />
        <Text style={styles.text}>{this.props.infoChamp.name}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginRight:5,
    marginBottom:5,
    flex:1,
    borderWidth:5,
    borderColor:'red',
    height:60,
    width:60,
    alignItems:'center'
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    //textAlign: 'center'
  }
})
