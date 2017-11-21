import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { saveDeckTitle } from '../utils/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import Button from './Button';

class AddDeckScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Title' };
    this.createDeck = this.createDeck.bind(this);
  }

  createDeck() {
    saveDeckTitle(this.state.title);
    const deckObj = {
      [this.state.title]: {
        title: this.state.title,
        questions: []
      }
    };
    this.props.addNewDeck(deckObj);
    this.setState({ title: '' });
    this.props.navigation.navigate('Decks');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid='#2962ff'
          style={styles.titleInput}
          onChangeText={(text) => this.setState({ title: text })}
          value={this.state.title}
          onFocus={() => this.setState({ title: '' })}
        />
        <View style={styles.buttonWrapper}>
          <Button text='Create Deck' func={this.createDeck}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  titleInput: {
    padding: 10,
    marginTop: 35,
    marginBottom: 10,
    fontSize: 17
  },
  buttonWrapper: {
    alignItems: "center"
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewDeck }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddDeckScreen);