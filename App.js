import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { grayBlue, candyAppleRed } from './utils/colors';
import DeckListScreen from './components/DeckListScreen';
import AddDeckScreen from './components/AddDeckScreen';
import AddCardScreen from './components/AddCardScreen';
import IndividualDeckScreen from './components/IndividualDeckScreen';
import QuizScreen from './components/QuizScreen';

const Tabs = TabNavigator({
  Decks: {
    screen: DeckListScreen,
    navigationOptions: {
      topBarLabel: 'Decks'
    }
  },
  AddDeck: {
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
    activeTintColor: candyAppleRed,
    style: {
      height: 50,
      backgroundColor: grayBlue,
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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  },
  IndividualDeck: {
    screen: IndividualDeckScreen,
    navigationOptions: {
      headerTintColor: candyAppleRed,
      headerStyle: {
        backgroundColor: grayBlue,
      }
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 100, backgroundColor: 'black'}}></View>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
