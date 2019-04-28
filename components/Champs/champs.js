import React, { Component } from 'react'
import { 
  View,
  Text, 
  FlatList, 
  StyleSheet,
  Button
} from 'react-native'
import { getAPIChampionAll } from '../../api/getAPIChampionAll'
import Champ from './champ'
export default class Champs extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      dataSource: []
    })
  }
  componentWillMount(){
    this.getDataSource()
  }
  componentDidMount() {
  }
  getDataSource = () => {
    getAPIChampionAll().then(res => {
      this.setState({ dataSource: res.apiArr})
    })
  }
  render() {
    //console.log(this.state.dataSource)
    return (
      <View style={styles.container}>
         <FlatList
            style={styles.flatList}
            numColumns={4}
            data={this.state.dataSource}
            renderItem={({item})=><Champ {...this.props} infoChamp={item}/>}
            keyExtractor={(item)=>item.id}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  flatList:{
    borderWidth:5,
    borderColor:'blue',
    marginLeft:'auto',
    marginRight:'auto'
  }
})
