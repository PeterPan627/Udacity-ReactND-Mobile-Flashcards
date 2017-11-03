import React, { Component } from 'react';
import { View } from 'react-native';
import DeckListItem from '../DeckListItem';

// temporary fake data
const fakeDecks = [
  'deck_one',
  'deck_two',
  'deck_three',
  'deck_four',
  'deck_five',
];

class DeckListScreen extends Component {
  renderDeckItems() {
    return fakeDecks.map((deck) => (
      <DeckListItem key={deck} deck={deck} />
    ));
  }

  render() {
    return (
      <View>
        {this.renderDeckItems()}
      </View>
    );
  }
}

export default DeckListScreen;