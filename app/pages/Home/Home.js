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
import { Carousel } from 'antd-mobile';

import BackPageComponent from '../../component/BackPageComponent';
import ScrollVertical from '../../component/ScrollVertical';
import NavigationBar from '../../component/NavigationBar';
import RowItem from '../../component/SimpleRowItem';
import Button from '../../component/Button';
import Grid from '../../component/Grid';
import { screen } from '../../constants';

import px2dp from '../../util/px2dp';

export default class HomePage extends BackPageComponent {

  addToBuy() {
    alert('添加求购');
  }

  render() {
    let data = [];
    for(let i=4; i--; ) {
      data.push({content: 'animatedScrollanimate ' + i})
    }

    return (
      <View>
        <NavigationBar
          title="React Native JS code runs inside this Chrome tab"
          leftBtnIcon="zuobiao"
          leftBtnPress={this._handleBack.bind(this)}
        />
        <View style={styles.CarouselView}>
        	<Carousel
            autoplay={true}
            autoplayInterval={10000}
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
        <View style={styles.SceneItem}>
          <Text style={[{color: '#ff7e00'}, styles.ItemText]}>实况：</Text>
          <View style={styles.CarouselText}>
            <ScrollVertical
              data={data}
              delay={4000}
              duration={500}
              scrollHeight={40}
              scrollStyle={{backgroundColor:'#fff'}}
              textStyle={{color:'#666', fontSize:16}}
            />
          </View>
          <Text style={styles.ItemText}>更多</Text>
        </View>
        <Grid />
        <View style={styles.buyInfo}>
          <View style={{height: 30, justifyContent: 'center', paddingTop: 5}}><Text style={{fontSize: 14, color: '#333'}}>添加求购，抢好车！</Text></View>
          <View style={{height: 30, justifyContent: 'center'}}><Text style={{fontSize: 14, color: '#333'}}>全国第一车源帮您找到！</Text></View>
          <View style={{paddingTop: 5, paddingBottom: 5}}>
            <Button
              title='添加求购'
              width={screen.width * .7}
              onPress={this.addToBuy.bind(this)}
            />
          </View>
          <View>
            <RowItem title="我的足迹" isShowLeftIcon={false} renderSegment={true} onPress={this.addToBuy.bind(this)} isShowRightArrow={true}/>
            <RowItem title="求购车源" isShowLeftIcon={false} renderSegment={true} onPress={this.addToBuy.bind(this)} isShowRightArrow={true}/>
            <RowItem title="收藏车源" isShowLeftIcon={false} renderSegment={false} onPress={this.addToBuy.bind(this)} isShowRightArrow={true}/>
          </View>
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
    position: 'absolute',
    zIndex: -1,
  },
  img: {
    height: 200
  },
  SceneItem: {
    marginTop: 156,
    marginBottom: px2dp(20),
    backgroundColor: '#fff',
    width: screen.width,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20),
  },
  buyInfo: {
    alignItems: 'center',
    'marginTop': px2dp(20),
    'marginBottom': px2dp(20),
    'backgroundColor': '#fff',
  },
  CarouselText: {
    width: screen.width * .8,
    paddingLeft: 5,
    flexDirection: 'column',
  },
  CarouselTextInfo: {
    fontSize: 16,
  },
  ItemText: {
    fontSize: 16,
    color: '#333',
  },
  
});

