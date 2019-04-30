import React, { Component } from 'react'
import { 
  View,
  Text, 
  FlatList, 
  StyleSheet,
  Button
} from 'react-native'
import {connect} from 'react-redux'
import { getAPIChampionAll } from '../../api/getAPIChampionAll'
import Champ from './champ'
export default class Support extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      dataSource: [],
    })
  }
  componentWillMount(){
    this.getDataSource()
  }
  componentDidMount() {
  }
  getDataSource = () => {
    console.log(getAPIChampionAll())
    getAPIChampionAll().then(res => {
      this.setState({ dataSource: res.apiArr.filter(champ=>champ.tags.map(tag=>tag).indexOf('Support')>=0)})
    })
  }
  static navigationOptions={
    drawerLabel:'Support'
  }
  render() {
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
function mapStateToProps(state){
  return {
    dataSource:state.filterChamps
  }
}

