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
import { Carousel, Flex } from 'antd-mobile';

import BackPageComponent from '../../component/BackPageComponent';
import NavigationBar from '../../component/NavigationBar';
import Grid from '../../component/Grid';
import { screen } from '../../constants';

import px2dp from '../../util/px2dp';

export default class HomePage extends BackPageComponent {

  data = Array.from(new Array(8)).map((_val, i) => ({
    text: `name${i}`,
  }));

  render() {
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
            <Carousel
              autoplay={true}
              autoplayInterval={6000}
              infinite
              dots={false}
              vertical={true}
            >
              <Text style={styles.CarouselTextInfo} numberOfLines={1}>万方上新了乐星 1004 拖拉机万方上新了乐星 1004 拖拉机万方上新了乐星 1004 拖拉机</Text>
              <Text style={styles.CarouselTextInfo} numberOfLines={1}>龙沙上新了沃得 1004 拖拉机</Text>
              <Text style={styles.CarouselTextInfo} numberOfLines={1}>13187139627上新了其他 自填 谷物联合收获机</Text>
              <Text style={styles.CarouselTextInfo} numberOfLines={1}>13871642469上新了东方红 LX804 拖拉机</Text>
              <Text style={styles.CarouselTextInfo} numberOfLines={1}>15972233625上新了福田雷沃 M554-B 拖拉机</Text>
            </Carousel>
          </View>
          <Text style={styles.ItemText}>更多</Text>
        </View>
        <Grid/>
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
  },
  
});

