import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getAPIChampionAll } from '../api/getAPIChampionAll'
import Champ from './champ'
export default class Main extends Component {
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
    console.log(this.state.dataSource)
    return (
      <View style={styles.container}>
        <Text>Chao ban minh</Text>
         <FlatList
            numColumns={3}
            data={this.state.dataSource}
            renderItem={({item})=><Champ infoChamp={item}/>}
            keyExtractor={(item)=>item.id}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
})
