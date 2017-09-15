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

export default class Botton extends Component {
	static propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
  	return (
  		<TouchableOpacity
				onPress={this.props.onPress}
        activeOpacity={screen.touchableOpacityActiveOpacity}>
  		>
	  		<View style={styles.BottonItem}>
		      
		    </View>
	    </TouchableOpacity>
  	);
  }

}

const styles = StyleSheet.create({
	
});