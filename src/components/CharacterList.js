// Scrollview
import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Character from './Character';
import appData from '../data/bojackhorseman.json';

const CharacterList = () => (
  <ScrollView>
    {appData.characters.map((character, index) => {
      return (
        <View key={index}>
          <Character character={character} />
        </View>
      );
    })}
  </ScrollView>
);

export default CharacterList;
