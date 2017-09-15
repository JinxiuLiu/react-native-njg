/**
 * Created by LiuJX on 2017-09-13 18:38:17
 */
'use strict'

import React, {Component} from 'react';
import {BackHandler} from 'react-native';

export default class PageComponent extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this._handleBack.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this._handleBack.bind(this));
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop()
            return true;
        }
        return false;
    }
}