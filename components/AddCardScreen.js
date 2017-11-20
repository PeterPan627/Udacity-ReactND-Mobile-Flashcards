import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { addCardToDeck } from '../utils/api';
import Button from './Button';

class AddCardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      question: 'Question',
      answer: 'Answer'
    };
    this.createCard = this.createCard.bind(this);
  }

  createCard() {
    // testing
    console.log(this.state);
    addCardToDeck();

    this.setState({ 
      question: '',
      answer: ''
    });
    this.props.navigation.dispatch(NavigationActions.back());
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid='#2962ff'
          style={styles.input}
          onChangeText={(text) => this.setState({ question: text })}
          value={this.state.question}
          onFocus={() => this.setState({ question: '' })}
        />
        <TextInput
          underlineColorAndroid='#2962ff'
          style={styles.input}
          onChangeText={(text) => this.setState({ answer: text })}
          value={this.state.answer}
          onFocus={() => this.setState({ answer: '' })}
        />
        <View style={styles.buttonWrapper}>
          <Button text='Create Card' func={this.createCard}/>
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
  input: {
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 17
  },
  buttonWrapper: {
    alignItems: "center"
  }
});

export default AddCardScreen;