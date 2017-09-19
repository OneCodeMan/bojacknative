/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class bojacknative extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );
  }
}


export default bojacknative;

AppRegistry.registerComponent('bojacknative', () => bojacknative);
