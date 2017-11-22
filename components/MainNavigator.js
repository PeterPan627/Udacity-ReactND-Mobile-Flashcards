import AddCardScreen from './AddCardScreen';
import IndividualDeckScreen from './IndividualDeckScreen';
import QuizScreen from './QuizScreen';
import Tabs from './Tabs';

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

export default navigationOptions;
