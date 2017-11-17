import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class AddCardScreen extends Component {
  render() {
    return (
      <View>
        <Text>QUESTION INPUT HERE</Text>
        <Text>ANSWER INPUT HERE</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: 'red',
    padding: 5
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default AddCardScreen;