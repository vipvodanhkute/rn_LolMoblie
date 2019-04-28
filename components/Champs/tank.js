import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { getAPIChampionAll } from '../api/getAPIChampionAll'
export default class Tank extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            dataSource: []
        })

    }
    componentWillMount() {
        this.getDataSource()
    }
    getDataSource = () => {
        getAPIChampionAll().then(res => {
          this.setState({ dataSource: res.apiArr.filter((champ)=>champ.tags.map(tag=>tag).indexOf('Tank')>=0)})
        })
      }
    render() {
        return (

        )
    }
}