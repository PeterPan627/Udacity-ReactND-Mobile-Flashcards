import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllDecks } from '../actions';
import DeckListItem from './DeckListItem';

class DeckListScreen extends Component {
  componentDidMount() {
    this.props.getAllDecks();
  }

  _keyExtractor = (item, index) => index;

  navigateToDeck = (deck) => {
    this.props.navigation.navigate('IndividualDeck', { deck });
  }

  render() {
    return (
      <FlatList 
        style={styles.deckList}
        data={Object.values(this.props.decks)}
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

function mapStateToProps(state) {
  return { decks: state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getAllDecks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckListScreen); 