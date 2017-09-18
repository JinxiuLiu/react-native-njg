/**
 * Created by LiuJX on 2017-09-15 15:00:43
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
import { Flex } from 'antd-mobile';

import { screen } from '../constants';
import px2dp from '../util/px2dp';

export default class Button extends Component {
	static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    width: PropTypes.number,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<TouchableOpacity
				onPress={this.props.onPress}
        activeOpacity={screen.touchableOpacityActiveOpacity}>
	  		<View style={[styles.ButtonView, {width: this.props.width}]}>
		      <Text style={styles.ButtonText}>{this.props.title}</Text>
		    </View>
	    </TouchableOpacity>
  	);
  }

}

const styles = StyleSheet.create({
	ButtonView: {
		backgroundColor: screen.themeColor,
		alignItems: 'center',
		justifyContent: 'center',
		height: 40,
		borderRadius: 6
	},
	ButtonText: {
		fontSize: 16,
		color: '#fff'
	}
});