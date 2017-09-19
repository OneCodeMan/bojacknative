// Card
import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Card = ({image, name, voicedBy, occupation}) => (
  <View>
    <Text>{image}</Text>
    <Text>{name} - Voiced by: {voicedBy}</Text>
    <Text>{occupation}</Text>
  </View>
);
