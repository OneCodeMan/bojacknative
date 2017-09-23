import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import Quotes from './Quotes';

const Character = ({ character }) => {
  const { image, name, voiced_by, occupation, quotes } = character;
  const { characterStyle } = styles;

  return (
    <View style={ characterStyle }>
      <Card
        image={image}
        name={name}
        voicedBy={voiced_by}
        occupation={occupation} />
      <Quotes quotes={quotes} />
    </View>
  );
};

const styles = {
  characterStyle: {
    margin: 10,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 0.4
  }
};

export default Character;
