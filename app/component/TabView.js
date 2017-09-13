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
import TabNavigator from 'react-native-tab-navigator'
import IconFont from 'react-native-vector-icons/IconFont'

import { screen } from '../constants'

import HomePage from '../pages/Home/Home'
import CarsList from '../pages/CarsList'
import Release from '../pages/Release'
import Store from '../pages/Store'
import User from '../pages/User'

export default class TabView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'HomePage',
      hideTabBar: false
    }
    this.tabNames = [
      ["首页", "zhuye", "HomePage", <HomePage {...this.props}/>],
      ["车源", "maiche", "CarsList", <CarsList {...this.props}/>],
      ["发布", "fabu", "Release", <Release {...this.props}/>],
      ["店铺", "dianpu", "Store", <Store {...this.props}/>],
      ["我的", "wode", "User", <User {...this.props}/>]
    ]
  }

  render(){
    return (
      <TabNavigator
        hidesTabTouch={true}
        tabBarStyle={[styles.tabbar,
          (this.state.hideTabBar?styles.hide:{})
        ]}
        sceneStyle={{ paddingBottom: styles.tabbar.height }}
      >
        {
          this.tabNames.map((item, i) => {
            return (
              <TabNavigator.Item
                key={i}
                tabStyle={styles.tabStyle}
                title={item[0]}
                titleStyle={styles.titleStyle}
                selected={this.state.currentTab === item[2]}
                selectedTitleStyle={{color: "#ff3a3b"}}
                renderIcon={() => <IconFont style={styles.iconfont} name={item[1]} size={24} color="#666" />}
                renderSelectedIcon={() => <IconFont style={styles.iconfont} name={item[1].replace(/\-outline$/, "")} size={24} color="#ff3a3b" />}
                onPress={() => this.setState({ currentTab: item[2] })}
              >
                {item[3]}
              </TabNavigator.Item>
            )
          })
        }
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  tabbar: {
    height: 50,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  hide: {
    transform: [
      {translateX: screen.width}
    ]
  },
  titleStyle: {
    fontSize: 14,
  },
  iconfont: {
    position: 'relative',
    top: 4,
  }
});