import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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
        <View style={styles.buttonWrapper}>
          <Button text='Create Deck'/>
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
    marginBottom: 10
  },
  buttonWrapper: {
    alignItems: "center"
  }
});

export default AddDeckScreen;