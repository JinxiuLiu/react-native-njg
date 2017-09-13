/**
 * Created by LiuJX on 2017-09-11 14:22:05
 */
'use strict';

import React, { Component } from 'react';
import { 
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	ListView,
	Image,
	StatusBar,
	FlatList
} from 'react-native';
import IconFont from 'react-native-vector-icons/IconFont';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

import NavigationBar from '../../component/NavigationBar';
import { screen } from '../../constants';



export default class HomePage extends Component {

  render() {
    return (
      <View>
        <NavigationBar
            title="React Native JS code runs inside this Chrome tab"
            leftBtnIcon="zuobiao"
        />
        <View style={styles.CarouselView}>
        	<Carousel
            autoplay={true}
            autoplayInterval={8000}
            infinite
            dotStyle={{backgroundColor: '#fff'}}
            dotActiveStyle={{backgroundColor: '#ff3a3b'}}
          >
            <Image source={{uri: 'http://sta.nongjigou.com/20170814185229_12256.png'}} style={styles.img}/>
            <Image source={{uri: 'http://img1.nongjigou.com/20170626143624_96259.png'}} style={styles.img}/>
            <Image source={{uri: 'http://img1.nongjigou.com/20170701141743_71657.png'}} style={styles.img}/>
            <Image source={{uri: 'http://img2.nongjigou.com/20170601174538_14573.png'}} style={styles.img}/>
            <Image source={{uri: 'http://img1.nongjigou.com/20170420170440_54610.png'}} style={styles.img}/>
          </Carousel>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  searchBar: {
    width: screen.width * 0.6,
    height: 30,
    paddingLeft: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignSelf: 'center',
  },
  CarouselView: {
    width: screen.width,
    height: 200,
    position: 'relative',
    zIndex: -1,
    top: -44
  },
  TabView: {
    width: screen.width,
    height: 44,
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    top: 0,
    zIndex: 10
  },
  img: {
    height: 200
  }
});

