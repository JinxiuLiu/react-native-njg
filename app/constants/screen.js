/**
 * Created by LiuJX on 2017-09-11 15:00:45
 */
'use strict';

import { Dimensions, Platform, PixelRatio } from 'react-native'

export default {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  onePixel: 1 / PixelRatio.get(),
  touchableHighlightUnderlayColor: 'rgba(0,0,0,.4)',
  touchableOpacityActiveOpacity: 0.8,
  navBar: {
  	height: 44,
  	titleColor: '#fff',
  	titleSize: 16,
  	textBtnSize: 12
  }
}
