/**
 * Created by LiuJX on 2017-09-08 13:02:29
 */
'use strict';

import React, { Component } from 'react'
import Navigation from './app'
import { View, Platform } from 'react-native'

export default class rootApp extends Component {
  render() {
    return (
      <View style={{backgroundColor: "#f5f5f5", flex: 1}}>
        <Navigation/>
      </View>
    )
  }
}