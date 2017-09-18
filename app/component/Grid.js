/**
 * Created by LiuJX on 2017-09-15 09:44:55
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {
	StyleSheet,
	Platform,
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import IconFont from 'react-native-vector-icons/IconFont';
import { Flex } from 'antd-mobile';

import { screen } from '../constants';
import px2dp from '../util/px2dp';

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<View style={styles.GridBox}>
	      <Flex justify="center">
	        <View style={[styles.GridBoxItem, {borderRightWidth: 1, borderBottomWidth: 1}]}><Text style={styles.GridBoxText}>东方红</Text></View>
	        <View style={[styles.GridBoxItem, {borderRightWidth: 1, borderBottomWidth: 1}]}><Text style={styles.GridBoxText}>福田雷沃</Text></View>
	        <View style={[styles.GridBoxItem, {borderRightWidth: 1, borderBottomWidth: 1}]}><Text style={styles.GridBoxText}>约翰迪尔</Text></View>
	        <View style={[styles.GridBoxItem, {borderBottomWidth: 1}]}><Text style={styles.GridBoxText}>东风</Text></View>
	      </Flex>
	      <Flex justify="center">
	        <View style={[styles.GridBoxItem, {borderRightWidth: 1}]}><Text style={styles.GridBoxText}>久保田</Text></View>
	        <View style={[styles.GridBoxItem, {borderRightWidth: 1}]}><Text style={styles.GridBoxText}>洋马</Text></View>
	        <View style={[styles.GridBoxItem, {borderRightWidth: 1}]}><Text style={styles.GridBoxText}>沃得</Text></View>
	        <View style={styles.GridBoxItem}><Text style={[styles.GridBoxText, {color: screen.themeColor}]}>全部</Text></View>
	      </Flex>
	    </View>
  	);
  }

}

const styles = StyleSheet.create({
	GridBox: {
    width: screen.width,
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: px2dp(20),
    paddingRight: px2dp(20),
  },
  GridBoxItem: {
    width: screen.width * .25,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#EBEBEB',
    borderStyle: 'solid',
  },
  GridBoxText: {
    textAlign: 'center',
    color: '#333'
  }
});