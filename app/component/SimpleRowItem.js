/**
 * Created by LiuJX on 2017-09-18 15:32:04
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import IconFont from 'react-native-vector-icons/IconFont';
import {screen} from '../constants';
import px2dp from '../util/px2dp';

export default class SimpleRowItem extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    onPress: PropTypes.func,
    renderSegment: PropTypes.bool,
    isShowLeftIcon: PropTypes.bool,
    isShowRightArrow: PropTypes.bool
  };

  static defaultProps = {
    renderSegment: true,
    iconColor: '#000',
    isShowRightArrow: true,
    isShowLeftIcon: true,
  }

  render(){
    if(Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onPress={this.props.onPress}>
          {this._renderContent()}
        </TouchableNativeFeedback>
      );
    }else if(Platform.OS === 'ios'){
      return(
        <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor={screen.touchableHighlightUnderlayColor}>
          {this._renderContent()}
        </TouchableHighlight>
      );
    }
  }

  _renderContent(){
    const {title, icon, renderSegment, iconColor, isShowRightArrow, isShowLeftIcon, rowItemBackgroundColor} = this.props;
    return(
      <View style={[styles.container, {backgroundColor: rowItemBackgroundColor}]}>
        {isShowLeftIcon ?
          <View style={styles.leftCell}>
            <View style={[styles.iconBorder, {backgroundColor: iconColor}]}>
              <IconFont name={icon} color={rowItemBackgroundColor} size={px2dp(16)}/>
            </View>
          </View>
          :
          null
        }
        <View style={styles.rightCell}>
          <View style={styles.cell}>
            <Text style={[styles.title]}>{title}</Text>
            {isShowRightArrow ?
              <IconFont name="you" color='#999' size={px2dp(20)}/>
              :
              null
            }
          </View>
          { renderSegment ?
            <View style={[styles.segmentLine, {backgroundColor: '#EBEBEB'}]}/>
            :
            null
          }
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screen.width,
    height: px2dp(60),
    alignItems: 'center'
  },
  title: {
    marginLeft: px2dp(5),
    color: '#333',
  },
  iconBorder: {
    borderRadius: 5,
    width: px2dp(23),
    height: px2dp(23),
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftCell: {
    width: px2dp(40),
    height: px2dp(60),
    paddingLeft: px2dp(17),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightCell: {
    flex: 1,
    height: px2dp(60),
    marginLeft: px2dp(15),
  },
  cell: {
    flex: 1,
    paddingRight: px2dp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  segmentLine: {
    height: screen.onePixel,
  }
});