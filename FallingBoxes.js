import React, { Component } from 'react';
import {
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

class FallingBoxes extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.x = [0, 50, 100];
    this.y = [-50, -100, -150];
    this.centerY = [300, 250, 200];
    for(let i=0;i<9;i++){
      let str = `box${(i+1)}`;
      this.state[str] = new Animated.ValueXY({x: this.x[(i%3)], y: this.y[(i%3)]});
    }
    this.toCenter = [];
    this.toEnd = [];
    for(let i=0;i<9;i++){
      let str = `box${(i+1)}`;
      this.toCenter.push(
        Animated.timing(this.state[str], {
          toValue: {x: this.x[(i%3)], y: this.centerY[Math.floor(i/3)]},
          duration: 100
        })
      );
    }
    for(let i=0;i<9;i++){
      let str = `box${(i+1)}`;
      this.toEnd.push(
        Animated.timing(this.state[str], {
          toValue: {x: this.x[(i%3)], y: height+50},
          duration: 100
        })
      );
    }
  }
  resetValues(){
    for(let i=0;i<9;i++){
      let str = `box${(i+1)}`;
      this.state[str].setValue({x: this.x[(i%3)], y: this.y[(i%3)]});
    }
  }
  fallToEnd(){
    Animated.sequence(this.toEnd).start(this.fallToCenter.bind(this));
  }
  fallToCenter(){
    this.resetValues();
    Animated.sequence(this.toCenter).start(this.fallToEnd.bind(this));
  }
  componentDidMount(){
    this.fallToCenter();
  }
  render() {
    let AnimatedViews = [];
    for(let i=1;i<=9;i++){
      AnimatedViews.push(
        <Animated.View
          key={i}
          style={[
            styles.box,
            {
              transform: this.state["box"+i].getTranslateTransform(),
              backgroundColor: this.props.squareColor
            }
          ]}
        />
      );
    }
    return (
      <View style={[
          styles.loaderContainer,
          {
            backgroundColor: this.props.backgroundColor
          }
        ]}>
        <View style={styles.content}>
          {AnimatedViews}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content:{
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

export default FallingBoxes;