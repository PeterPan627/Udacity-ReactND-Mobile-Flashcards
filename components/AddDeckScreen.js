import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Button from './Button';

class AddDeckScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Title' };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid='#2962ff'
          style={styles.titleInput}
          onChangeText={(text) => this.setState({ title: text })}
          value={this.state.title}
        />
        <Button text='Create Deck'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  titleInput: {
    padding: 10
  }
});

export default AddDeckScreen;