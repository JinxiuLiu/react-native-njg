/**
 * Created by LiuJX on 2017-09-08 13:02:29
 */
'use strict';

import React, { Component } from 'react'
import { View, Text, StatusBar, Platform } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Wrapper from './component/Wrapper'

export default class Navigation extends Component {
  render() {
    return (
      <Wrapper/>
    )
  }
}