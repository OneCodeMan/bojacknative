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
import CharacterList from './src/components/CharacterList';

class bojacknative extends React.PureComponent {
  render() {
    return (
      <View>
        <CharacterList />
      </View>
    );
  }
}


export default bojacknative;

AppRegistry.registerComponent('bojacknative', () => bojacknative);
