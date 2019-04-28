import React, { Component } from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ImageBackground,
    Button,
    SafeAreaView,
    Image,
    TouchableHighlight
} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import {getAPIChampInfo} from '../../api/getAPIChampInfo'
//import { TouchableHighlight } from 'react-native-gesture-handler';
export default class InfoChamp extends Component {
    constructor(props){
        super(props);
        this.state=({
            nameChamp:'',
            API:{},
            carouselData:[],
            activeIndex:0,
            backgroundImage:''
        })
    }
    _source=()=>{
        const name=this.props.navigation.state.params.name;
        const url='http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
        const uri=`${url}${name}_0.jpg`;
        return uri
    }
    componentWillMount(){
        this._getSkinsChamp()
    }
    _getSkinsChamp=()=>{
    getAPIChampInfo(this.props.navigation.state.params.name).then(res=>this.setState({
       API:res.apiArr[0],
       carouselData:res.apiArr[0].skins.map((name)=>{
           if(name.name==='default'){
               return {...name,name:`${this.props.navigation.state.params.name} `}
           }
           return {...name}
       })

    }))}
    _renderItem ({item, index}){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image
                style={{width:100,height:100}}
                source={{uri:`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.name.substr(0,item.name.indexOf(' '))}_${item.num}.jpg`}}
                />
                <Text style={{color:'white'}}>{item.name}</Text>
                {
                   console.log(item.name.substr(0,item.name.indexOf(' ')))
                }{
                   console.log(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.name.substr(0,item.name.indexOf(' '))}_${item.num}.jpg`)
                }
            </View>
        );
    }
    render() {
        console.log(this._source())
        console.log(this.state.API)
        console.log(this.state.carouselData)
        return (
            <ImageBackground
            style={styles.backgroundImage}
            resizeMode={'cover'}
            source={{uri:this._source()}}
            >
            <SafeAreaView
            style={styles.container}
            >
            <TouchableHighlight
            onPress={()=>this._carousel._snapToItem(this.state.activeIndex + -1)}
            >
                <Text style={{color:'white'}}>Prev</Text>
            </TouchableHighlight>
            <Carousel
              layout={'stack'}
              ref={(c) => { this._carousel = c; }}
              data={this.state.carouselData}
              renderItem={this._renderItem}
              sliderWidth={250}
              itemWidth={250}
              onSnapToItem={
                  index=>this.setState({activeIndex:index})
              }
            />
            <TouchableHighlight
            onPress={()=>this._carousel._snapToItem(this.state.activeIndex + 1)}
            >
                <Text style={{color:'white'}}>Next</Text>
            </TouchableHighlight>
            </SafeAreaView>
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    backgroundImage:{
        width:'100%',
        flex:1
    },
    container:{
        flex:1,
        //backgroundColor:'#131420',
        alignItems:'center',
        justifyContent:'center'
    }
})