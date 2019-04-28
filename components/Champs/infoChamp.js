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
import { getAPIChampInfo } from '../../api/getAPIChampInfo'
//import { TouchableHighlight } from 'react-native-gesture-handler';
export default class InfoChamp extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            API: {},
            carouselData: [],
            tags: [],
            stats: {},
            activeIndex: 0,
            backgroundChamp: 'xx'
        })
    }
    _source = () => {
        const name = this.props.navigation.state.params.name;
        const url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/';
        const uri = `${url}${name}_${this.state.activeIndex}.jpg`;
        // this.setState({
        //     backgroundChamp:uri
        // })
        return uri
    }
    componentWillMount() {
        this._getSkinsChamp()
    }
    _getSkinsChamp = () => {
        getAPIChampInfo(this.props.navigation.state.params.name).then(res => this.setState({
            API: res.apiArr[0],
            carouselData: res.apiArr[0].skins.map((name) => {
                if (name.name === 'default') {
                    return { ...name, name: `${this.props.navigation.state.params.name} ` }
                }
                return { ...name }
            }),
            tags: res.apiArr[0].tags,
            stats: res.apiArr[0].stats,
        }))
    }
    _renderItem({ item, index }) {
        return (
            <View style={{justifyContent:'center'}}>
                <Image
                    resizeMode={'contain'}
                    style={{ width: 150, height: 150 }}
                    source={{ uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.name.substr(0, item.name.indexOf(' '))}_${item.num}.jpg` }}
                />
                <Text style={{ textAlign: 'center', color: 'white' }}>{item.name}</Text>
                {
                    console.log(item.name.substr(0, item.name.indexOf(' ')))
                }{
                    console.log(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${item.name.substr(0, item.name.indexOf(' '))}_${item.num}.jpg`)
                }
            </View>
        );
    }
    render() {
        console.log(this._source())
        console.log(this.state.API)
        console.log(this.state.carouselData)
        console.log(this.state.backgroundChamp)
        return (
            <ImageBackground
                style={styles.backgroundImage}
                resizeMode={'cover'}
                source={{ uri: this._source() }}
            >
                <View style={styles.left}>
                    <View style={styles.text}>
                        <Text style={styles.text}>{this.state.API.name}</Text>
                        <Text style={styles.text}>{this.state.API.title}</Text>
                        <Text style={styles.text}>{this.state.tags[0]}</Text>
                        <Text style={styles.text}>{this.state.tags[1]}</Text>
                    </View>
                    <SafeAreaView
                        style={styles.safeAreaView}
                    >
                        <TouchableHighlight
                            onPress={() => this._carousel._snapToItem(this.state.activeIndex + -1)}
                        >
                            <Text style={{ color: 'white' }}>Prev</Text>
                        </TouchableHighlight>
                        <View>
                            <Carousel
                                layout={'stack'}
                                ref={(c) => { this._carousel = c; }}
                                data={this.state.carouselData}
                                renderItem={this._renderItem}
                                sliderWidth={250}
                                itemWidth={250}
                                onSnapToItem={
                                    index => this.setState({ activeIndex: index })
                                }
                            />
                        </View>
                        <TouchableHighlight
                            onPress={() => this._carousel._snapToItem(this.state.activeIndex + 1)}
                        >
                            <Text style={{ color: 'white' }}>Next</Text>
                        </TouchableHighlight>
                    </SafeAreaView>
                </View>
                <View style={styles.right}>
                    <Text style={styles.text}>Sức mạnh</Text>
                    <Text style={styles.text}>{this.state.stats.attackdamage}</Text>
                    <Text style={styles.text}>Sinh lực</Text>
                    <Text style={styles.text}>{this.state.stats.hp}</Text>
                    <Text style={styles.text}>Giáp</Text>
                    <Text style={styles.text}>{this.state.stats.armor}</Text>
                    <Text style={styles.text}>Tốc độ di chuyển</Text>
                    <Text style={styles.text}>{this.state.stats.movespeed}</Text>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        flex: 1,
        flexDirection:'row'
    },
    safeAreaView: {
        justifyContent: 'center',
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'blue',
    },
    text: {
        color: 'white'
    },
    left: {
        flex: 1
    },
    right: {
        flex: 1
    }
})