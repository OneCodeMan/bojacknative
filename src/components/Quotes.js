// carousel
import React from 'react';
import { Text, View } from 'react-native';

const Quotes = ({ quotes }) => (
  <View>
    {quotes.map((quote, ind) => {
      return (
        <Text key={ind}>{quote}</Text>
      )
    })}
  </View>
);

export default Quotes;
