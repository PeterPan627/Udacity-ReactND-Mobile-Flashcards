import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { saveDeckTitle } from '../utils/api';
import Button from './Button';

class AddDeckScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Title' };
    this.createDeck = this.createDeck.bind(this);
  }

  createDeck() {
    // testing
    console.log(this.state);
    saveDeckTitle();

    this.setState({ title: '' })
    this.props.navigation.dispatch(NavigationActions.back());
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

export default AddDeckScreen;