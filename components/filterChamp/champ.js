import React, { Component } from 'react'
import { 
  View, 
  Text, 
  Image, 
  StyleSheet,
  TouchableOpacity,
  Dimensions
 } from 'react-native'
export default class Champ extends Component {
  constructor(props) {
    super(props);
  }
  _onPress=()=>{
    this.props.navigation.navigate('InfoChamp',{name:this.props.infoChamp.name})
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
const width=Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginRight:1,
    marginBottom:5,
    //flex:1,
    //borderWidth:5,
    borderColor:'gray',
    alignItems:'center'
  },
  image: {
    width: (width-4)/4,
    height:width/4,
  },
  text: {
    //textAlign: 'center'
    color:'gray'
  }
})
