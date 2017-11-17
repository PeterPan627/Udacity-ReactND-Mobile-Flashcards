import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { pantoneRed } from '../utils/colors';

class IndividualDeckScreen extends Component {
  render() {
    return (
      <View style={styles.deckCard}>
        <Text>Deck Title</Text>
        <Text>Number of cards</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckCard: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 15
  },
  button: {
    backgroundColor: pantoneRed,
    margin: 5
  }
});

export default IndividualDeckScreen;