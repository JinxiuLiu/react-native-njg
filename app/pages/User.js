import React, { Component } from 'react';
import { Text } from 'react-native';
import IconFont from 'react-native-vector-icons/IconFont';

export default class User extends Component {
	static navigationOptions = {
    title: '个人中心',
    tabBarIcon: ({ tintColor }) =>
      <IconFont name="wode" size={25} color={tintColor} />,
  };

  render() {
    return (
      <Text>Hello User!</Text>
    );
  }
}