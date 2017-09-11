/**
 * Created by LiuJX on 2017-09-08 13:52:53
 */
'use strict';

import React, { Component } from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  Image,
  View
} from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import IconFont from 'react-native-vector-icons/IconFont'

import HomePage from '../pages/Home/Home'
import CarsList from '../pages/CarsList'
import Release from '../pages/Release'
import Store from '../pages/Store'
import User from '../pages/User'

const TabContainer = TabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '农机狗',
        tabBarIcon: ({ tintColor }) =>
          <IconFont name="zhuye" size={24} color={tintColor} />,
      }),
    },
    CarsList: {
      screen: CarsList,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '车源',
        tabBarIcon: ({ tintColor }) =>
          <IconFont name="maiche" size={24} color={tintColor} />,
      }),
    },
    Release: {
      screen: Release,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '发布',
        tabBarIcon: ({ tintColor }) =>
          <IconFont name="fabu" size={24} color={tintColor} />,
      }),
    },
    Store: {
      screen: Store,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '店铺',
        tabBarIcon: ({ tintColor }) =>
          <IconFont name="dianpu" size={24} color={tintColor} />,
        }),
    },
    User: {
      screen: User,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) =>
          <IconFont name="wode" size={24} color={tintColor} />,
      }),
    },
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#ff3a3b',
      inactiveTintColor: '#666',
      showIcon: true,
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: {
        height: 50,
        backgroundColor: '#fff',
      },
      tabStyle: {
      },
      iconStyle: {
        position: 'relative',
        top: -5,
        width: 25,
        height: 25
      },
      labelStyle: {
        fontSize: 14, // 文字大小
        position: 'relative',
        top: -13,
      },
    },
  }

);

const TabView = StackNavigator(
  {
    Home: {
      screen: TabContainer,
    },
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'rgba(0, 0, 0, .1)',
        height: 44
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#fff'
    }
  }
);

export default TabView;