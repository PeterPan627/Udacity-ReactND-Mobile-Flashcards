import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { blue, white } from '../utils/colors';

const Button = (props) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: blue,
    width: 100
  },
  buttonText: {
    color: white,
    borderRadius: 1
  }
});

export default Button;
