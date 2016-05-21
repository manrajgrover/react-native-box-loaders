import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import Loader1 from './Loader1';

class squareLoader extends Component {
  render() {
    console.log("Rendering");
    return (
      <View style={styles.container}>
        <Loader1></Loader1>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FEBFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('squareLoader', () => squareLoader);