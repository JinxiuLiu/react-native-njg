/**
 * Created by LiuJX on 2017-09-11 14:22:05
 */
'use strict';

import React, { Component } from 'react'
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
} from 'react-native'
import IconFont from 'react-native-vector-icons/IconFont'
import Swiper from 'react-native-swiper'

import { screen } from '../../common'

export default class HomePage extends Component {
	static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <TouchableOpacity style={styles.searchBar}>
        <IconFont name="sousuo" size={15} color='#656565' />
        <Text style={{paddingLeft: 5}}>请输入品牌或车型</Text>
      </TouchableOpacity>
    ),
    headerRight: (
      <IconFont name="qiandao" size={20} color='#656565' />
    ),
    headerLeft: (
      <Text><IconFont name="zuobiao" size={15} color='#656565' />全国</Text>
    ),
    headerStyle: {
    	backgroundColor: 'pink'
    }
  })

  render() {
    return (
      <View style={{width: screen.width, height: 240}}>
      	<Swiper
			    style={styles.swiper}
			    height={240}
			    dot={<View style={{backgroundColor: '#fff', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
			    activeDot={<View style={{backgroundColor: '#ff3a3b', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
			    paginationStyle={{
	          bottom: 50
	        }}
			    loop={true}
			    autoplay={true}
			    autoplayTimeout={5}
			  >
			  	<View style={styles.slide}>
	          <Image source={{uri: 'http://sta.nongjigou.com/20170814185229_12256.png'}} style={styles.img}/>
	        </View>
	        <View style={styles.slide}>
			    	<Image source={{uri: 'http://img1.nongjigou.com/20170626143624_96259.png'}} style={styles.img}/>
	        </View>
	        <View style={styles.slide}>
			    	<Image source={{uri: 'http://img1.nongjigou.com/20170701141743_71657.png'}} style={styles.img}/>
	        </View>
	        <View style={styles.slide}>
			    	<Image source={{uri: 'http://img2.nongjigou.com/20170601174538_14573.png'}} style={styles.img}/>
	        </View>
	        <View style={styles.slide}>
			    	<Image source={{uri: 'http://img1.nongjigou.com/20170420170440_54610.png'}} style={styles.img}/>
	        </View>
				</Swiper>
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
  slide: {
  	height: 200,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  swiper: {
  },
  img: {
    flex: 1
  }
});

