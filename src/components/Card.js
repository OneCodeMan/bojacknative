// Card
import React from 'react';
import { Text, View, Image } from 'react-native';

const Card = ({ image, name, voicedBy, occupation }) => (
  <View>
    <View stye={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{width: 250, height: 250}} source={{ uri: image }} />
    </View>
    <Text>{name} - Voiced by: {voicedBy}</Text>
    <Text>{occupation}</Text>
  </View>
);

export default Card;
