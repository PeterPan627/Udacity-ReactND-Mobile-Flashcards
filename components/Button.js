import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { blue, white } from '../utils/colors';

const Button = (props) => (
  <TouchableOpacity 
    style={styles.button}
    onPress={props.func}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: blue,
    width: 100,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3
  },
  buttonText: {
    color: white,
    borderRadius: 1,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Button;
