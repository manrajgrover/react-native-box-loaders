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
        <Loader1 backgroundColor="#e5e5e5" squareColor="#000000"></Loader1>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('squareLoader', () => squareLoader);