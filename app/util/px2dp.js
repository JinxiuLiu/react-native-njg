/**
 * Created by LiuJX on 2017-09-13 16:40:53
 */
'use strict'

import { Dimensions } from 'react-native';

const deviceWidthDp = Dimensions.get('window').width;
// UI设计稿
const uiWidthPx = 750;

export default function px2dp(uiElementPx) {
	return uiElementPx *  deviceWidthDp / uiWidthPx;
}