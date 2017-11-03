import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DeckListItem extends Component {
  render() {
    return (
      <View style={styles.deckItem}>
        <Text>{this.props.deck}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckItem: {
    backgroundColor: '#ddd',
  }
});

export default DeckListItem;