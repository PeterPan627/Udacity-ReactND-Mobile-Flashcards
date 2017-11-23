import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { blue, blueHighlight, white } from '../utils/colors';
import DeckListScreen from './DeckListScreen';
import AddDeckScreen from './AddDeckScreen';
import AddCardScreen from './AddCardScreen';
import IndividualDeckScreen from './IndividualDeckScreen';
import QuizScreen from './QuizScreen';

const Tabs = TabNavigator({
  Decks: {
    screen: DeckListScreen,
    navigationOptions: {
      topBarLabel: 'Decks'
    }
  },
  Add: {
    screen: AddDeckScreen,
    navigationOptions: {
      topBarLabel: 'Add New Deck'
    }
  }
},
{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: blueHighlight,
    style: {
      height: 50,
      backgroundColor: blue,
      shadowColor: 'rgba(0, 0, 0, 0.4)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const navigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: blue
  }
};

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
},
IndividualDeck: {
  screen: IndividualDeckScreen,
  navigationOptions
},
Quiz: {
  screen: QuizScreen,
  navigationOptions
},
AddCard: {
  screen: AddCardScreen,
  navigationOptions
}
});

export default MainNavigator;