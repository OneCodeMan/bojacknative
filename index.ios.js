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
  ScrollView,
  View,
} from 'react-native';
import CharacterList from './src/components/CharacterList';
import Intro from './src/components/Intro';

class bojacknative extends React.PureComponent {
  render() {
    return (
      <View>
        <Intro />
        <CharacterList />
      </View>
    );
  }
}


export default bojacknative;

AppRegistry.registerComponent('bojacknative', () => bojacknative);
