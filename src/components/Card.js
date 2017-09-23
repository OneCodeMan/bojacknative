// Card
import React from 'react';
import { Text, View, Image } from 'react-native';

const Card = ({ image, name, voicedBy, occupation }) => {
  const { imageContainer, imageStyle, nameText, voiceActorText } = styles;

  return (
    <View>
      <View style={ imageContainer }>
        <Image style={ imageStyle } source={{ uri: image }} />
      </View>
      <Text style={ nameText }>{name} <Text style={ voiceActorText }>{voicedBy}</Text></Text>
      { occupation ? <Text>Occupation: {occupation}</Text> : null }
    </View>
  );
};

const styles = {
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: 225,
    height: 250
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  voiceActorText: {
    fontStyle: 'italic',
    fontSize: 15
  }

};

export default Card;
