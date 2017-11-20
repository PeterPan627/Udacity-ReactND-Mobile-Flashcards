import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import DeckListItem from './DeckListItem';

// temporary fake data
const fakeDecks = [
  { title: 'ONE', cards: 2 },
  { title: 'TWO', cards: 7 },
  { title: 'THREE', cards: 111 },
  { title: 'FOUR', cards: 12 },
  { title: 'FIVE', cards: 22 },
];

const sampleData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

class DeckListScreen extends Component {
  constructor(props) {
    super(props);
    this.navigateToDeck = this.navigateToDeck.bind(this);
  }

  _keyExtractor = (item, index) => index;

  navigateToDeck() {
    this.props.navigation.navigate('IndividualDeck');
  }

  render() {
    return (
      <FlatList 
        style={styles.deckList}
        data={fakeDecks}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => (
          <DeckListItem 
            deck={item} 
            navigateToDeck={this.navigateToDeck} 
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  deckList: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop: 5,
    padding: 10
  }
});

export default DeckListScreen;