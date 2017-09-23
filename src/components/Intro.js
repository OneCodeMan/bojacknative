import React from 'react';
import { Text, View } from 'react-native';

const Intro = () => {
  const { introText, introView } = styles;

  return (
    <View style={ introView }>
      <Text style={ introText }>Bojack Native</Text>
    </View>
  );
};

const styles = {
  introView: {
    backgroundColor: '#A47719',
    justifyContent: 'center',
    height: 60,
    zIndex: 4
  },
  introText: {
    fontSize: 30,
    textAlign: 'center',
  },
};

export default Intro;
