/**
 * Created by LiuJX on 2017-09-13 16:02:43
 */
'use strict'

import React, {Component, PropTypes} from 'react';
import {
	StyleSheet,
	Platform,
	View,
	Text,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import IconFont from 'react-native-vector-icons/IconFont';

import { screen } from '../constants';
import px2dp from '../util/px2dp';

class NavigationBar extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    leftBtnIcon: PropTypes.string,
    leftBtnText: PropTypes.string,
    leftBtnPress: PropTypes.func,
    rightBtnIcon: PropTypes.string,
    rightBtnText: PropTypes.string,
    rightBtnPress: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render(){
    const {title, leftBtnIcon, leftBtnText, leftBtnPress, rightBtnIcon, rightBtnText, rightBtnPress} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} />
        <View style={[styles.toolbar]}>
          <View style={styles.fixedCell}>
            {(leftBtnIcon || leftBtnText) ?
              <Button icon={leftBtnIcon} text={leftBtnText} onPress={leftBtnPress} />
              :
              null
            }
          </View>
          <View style={styles.centerCell}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
          </View>
          <View style={styles.fixedCell}>
            {(rightBtnIcon || rightBtnText) ?
              <Button icon={rightBtnIcon} text={rightBtnText} onPress={rightBtnPress} />
              :
              null
            }
          </View>
        </View>
      </View>
    );
	}
}

class Button extends Component{
  static propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func
  };

  render(){
    var icon = null;
    if(this.props.icon) {
        icon = this.props.icon;
    }
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpacity={screen.touchableOpacityActiveOpacity}>
        <View style={styles.btn}>
          {icon ?
            <IconFont name={icon} color="#fff" size={px2dp(23)}/>
            :
            <Text style={styles.btnText}>{this.props.text}</Text>
          }
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: { //in order to display the shadow on home tab
        height: 44,
        width: screen.width,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    toolbar: {
        height: 44,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.1)',
        elevation: 3,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {height: 2, width: 1},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    fixedCell: {
        width: screen.navBar.height,
        height: screen.navBar.height,
        flexDirection:'row',
    },
    centerCell: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: screen.navBar.titleSize,
        color: screen.navBar.titleColor
    },
    btn: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        width: screen.navBar.height,
        height: Platform.OS === 'android' ? screen.navBar.height : screen.navBar.height - px2dp(6),
    },
    btnText: {
        color: screen.navBar.titleColor,
        fontSize: screen.navBar.textBtnSize
    }
});

export default NavigationBar;