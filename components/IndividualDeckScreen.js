import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray } from '../utils/colors';
import Button from './Button';

class IndividualDeckScreen extends Component {
  navigate = (screen) => {
    this.props.navigation.navigate(screen, {
      deck: this.props.deck.title
    })
  }
  
  render() {
    const deck = this.props.deck;
    return (
      <View style={styles.deckCard}>
        <View>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.cardNumber}>This deck has {deck.questions.length} cards</Text>
        </View>
        <View>
          <Button text='Start Quiz' func={() => this.navigate('Quiz')}/>
          <Button text='Add Card' func={() => this.navigate('AddCard')}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckCard: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 25,
    padding: 25,
    backgroundColor: gray,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3
  },
  deckTitle: {
    fontSize: 23,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardNumber: {
    fontSize: 15,
    textAlign: 'center'
  }
});

function mapStateToProps(state, ownProps) {
  return { deck: state[ownProps.navigation.state.params.deck] };
}

export default connect(mapStateToProps)(IndividualDeckScreen);