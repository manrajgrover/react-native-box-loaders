/*
* @Author: Manraj Singh
* @Date:   2016-05-24 18:46:13
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-27 20:39:52
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

import FallingBoxes from './FallingBoxes';

class BoxLoaders extends Component {
  render() {
  	switch (this.props.type) {
  		case 'FallingBoxes':
  			return(
  				<FallingBoxes backgroundColor={this.props.backgroundColor} squareColor = {this.props.squareColor} />
  			);
      case 'Loader2':
        return(
          <Loader2 backgroundColor={this.props.backgroundColor} squareColor = {this.props.squareColor} />
        );
  		default:
  			return(
  				<View />
  			);
  	}
  }
}

export default BoxLoaders;