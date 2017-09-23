// carousel
import React from 'react';
import { Text, View, FlatList } from 'react-native';

const Quotes = ({ quotes }) => {
  const { quoteStyles, quoteText } = styles;

  return (
    <View style={ quoteStyles }>
      { quotes ? <Text style={ quoteText }>&#8220;{quotes}&#8221;</Text> : null }
    </View>
  );
};

const styles = {
  quoteStyles: {
    marginTop: 10,
  },
  quoteText: {
    fontSize: 15
  }
};

export default Quotes;
