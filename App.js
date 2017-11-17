import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListScreen from './components/DeckListScreen';
import AddDeckScreen from './components/AddDeckScreen';
import AddCardScreen from './components/AddCardScreen';
import IndividualDeckScreen from './components/IndividualDeckScreen';
import QuizScreen from './components/QuizScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Flashcards Ready!</Text>
        <QuizScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
