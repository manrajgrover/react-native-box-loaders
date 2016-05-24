/*
* @Author: Manraj Singh
* @Date:   2016-05-24 18:46:13
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-25 00:41:09
*/

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import Loader1 from './Loader1';

class BoxLoaders extends Component {
  render() {
  	switch (this.props.type) {
  		case 'Loader1':
  			return(
  				<Loader1 backgroundColor={this.props.backgroundColor} squareColor = {this.props.squareColor} />
  			);
  		default:
  			return(
  				<View />
  			);
  	}
  }
}

export default BoxLoaders;