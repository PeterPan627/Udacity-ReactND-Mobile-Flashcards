import { TabNavigator } from 'react-navigation';
import DeckListScreen from './DeckListScreen';
import AddDeckScreen from './AddDeckScreen';

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

export default Tabs;
