import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { setLocalNotification } from './utils/notifications';
import { blue, blueDark, blueHighlight, white } from './utils/colors';
import DeckListScreen from './components/DeckListScreen';
import AddDeckScreen from './components/AddDeckScreen';
import AddCardScreen from './components/AddCardScreen';
import IndividualDeckScreen from './components/IndividualDeckScreen';
import QuizScreen from './components/QuizScreen';

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

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

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={blueDark}/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
