import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckListScreen from './components/screens/DeckListScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Flashcards Ready!</Text>
        <DeckListScreen />
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
