// Scrollview
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Character from './Character';
import appData from '../data/bojackhorseman.json';

const CharacterList = () => (
  <View>
    {appData.characters.map((character, index) => {
      return (
        <View key={index}>
          <Character character={character} />
        </View>
      );
    })}
  </View>
);

export default CharacterList;
