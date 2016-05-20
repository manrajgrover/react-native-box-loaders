import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import Dimensions from 'Dimensions';
let {
  width,
  height
} = Dimensions.get('window');

let SQD = 20;

class squareLoader extends Component {
  constructor(props){
    super(props);
    this.state = {};
    let x = [0, 50, 100];
    let y = [-50, -100, -150];
    for(let i=0;i<9;i++){
      let str = "box"+(i+1);
      this.state[str] = new Animated.ValueXY({x: x[(i%3)], y: y[(i%3)]});
    }
  }
  componentDidMount(){
    Animated.sequence([
        Animated.timing(this.state.box1, {
          toValue: {x: 0, y: 300},
          duration: 100
        }),
        Animated.timing(this.state.box2, {
          toValue: {x: 50, y: 300},
          duration: 100
        }),
        Animated.timing(this.state.box3, {
          toValue: {x: 100, y: 300},
          duration: 100
        }),
        Animated.timing(this.state.box4, {
          toValue: {x: 0, y: 250},
          duration: 100
        }),
        Animated.timing(this.state.box5, {
          toValue: {x: 50, y: 250},
          duration: 100
        }),
        Animated.timing(this.state.box6, {
          toValue: {x: 100, y: 250},
          duration: 100
        }),
        Animated.timing(this.state.box7, {
          toValue: {x: 0, y: 200},
          duration: 100
        }),
        Animated.timing(this.state.box8, {
          toValue: {x: 50, y: 200},
          duration: 100
        }),
        Animated.timing(this.state.box9, {
          toValue: {x: 100, y: 200},
          duration: 100
        }),
    ]).start()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box1.getTranslateTransform()
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box2.getTranslateTransform()
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box3.getTranslateTransform()
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box4.getTranslateTransform()
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box5.getTranslateTransform()
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box6.getTranslateTransform()
              }
            ]}
          />
          <Animated.View
            style={[
              styles.box,
              {
                transform: this.state.box7.getTranslateTransform()
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box8.getTranslateTransform()
              }
            ]}
          />
          <Animated.View 
            style={[
              styles.box,
              {
                transform: this.state.box9.getTranslateTransform()
              }
            ]}
          />
        </View>
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
  },
  loaderContainer:{
    position: 'relative',
    width: width - width/1.5,
    height: height
  },
  box: {
    position: 'absolute',
    backgroundColor: '#C2F8FF',
    width: SQD,
    height: SQD
  }
});

AppRegistry.registerComponent('squareLoader', () => squareLoader);