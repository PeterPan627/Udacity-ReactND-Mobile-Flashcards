import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class QuizScreen extends Component {
  render() {
    return (
      <View style={styles.quizCard}>
        <Text>Question?</Text>
        <Text>Answer</Text>
        <Text>show question?</Text>
        <Text>show answer?</Text>
        <TouchableOpacity style={styles.correctButton}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.incorrectButton}>
          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  quizCard: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    padding: 15
  },
  correctButton: {
    backgroundColor: 'green'
  },
  incorrectButton: {
    backgroundColor: 'red'
  }
});

export default QuizScreen;