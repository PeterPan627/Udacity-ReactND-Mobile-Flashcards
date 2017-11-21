import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { getDecks } from '../utils/api';
import DeckListItem from './DeckListItem';

class DeckListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { decks: [] };
    this.navigateToDeck = this.navigateToDeck.bind(this);
  }

  componentDidMount() {
    getDecks()
      .then(data => this.setState({ decks: data }));
  }

  _keyExtractor = (item, index) => index;

  navigateToDeck() {
    this.props.navigation.navigate('IndividualDeck');
  }

  render() {
    return (
      <FlatList 
        style={styles.deckList}
        data={Object.values(this.state.decks)}
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