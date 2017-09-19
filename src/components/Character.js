import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import Quotes from './Quotes';

const Character = ({ character }) => {
  const { image, name, voiced_by, occupation, quotes } = character;

  return (
    <View>
      <Card image={image} name={name} voicedBy={voiced_by}
        occupation={occupation} />
      <Quotes quotes={quotes} />
    </View>
  );
};

export default Character;
