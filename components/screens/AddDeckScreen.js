import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class AddDeckScreen extends Component {
  render() {
    return (
      <View>
        <Text>TITLE INPUT HERE</Text>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create Deck</Text>
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

export default AddDeckScreen;