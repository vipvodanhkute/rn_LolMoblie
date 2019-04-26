import  React,{Component} from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
export default class Champ extends Component{
  render(){
    return(
      <View>
        <Image
        style={styles.image}
        />
        <Text>{this.props.infoChamp.name}</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{

  },
  image:{
    width:50,
    height:50,
  }
})
