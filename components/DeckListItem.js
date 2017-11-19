import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { blue, blueHighlight, white } from '../utils/colors';

class DeckListItem extends Component {
  render() {
    return (
      <View style={styles.deckItem}>
        <Text style={styles.deckTitle}>{this.props.deck.title}</Text>
        <Text style={styles.cardNumber}>Cards: {this.props.deck.cards}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckItem: {
    backgroundColor: blue,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3
  },
  deckTitle: {
    marginBottom: 5,
    fontSize: 18,
    color: white,
  },
  cardNumber: {
    color: blueHighlight,
    fontSize: 15
  }
});

export default DeckListItem;