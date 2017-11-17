import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import DeckListItem from './DeckListItem';

// temporary fake data
const fakeDecks = [
  { key: 'ONE' },
  { key: 'TWO' },
  { key: 'THREE' },
  { key: 'FOUR' },
  { key: 'FIVE' },
];

class DeckListScreen extends Component {
  render() {
    return (
      <FlatList 
        style={styles.deckList}
        data={fakeDecks}
        renderItem={({ item }) => <DeckListItem key={item.key} deck={item.key} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  deckList: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 5
  }
});

export default DeckListScreen;