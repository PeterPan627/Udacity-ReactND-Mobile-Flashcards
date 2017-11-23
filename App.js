import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { setLocalNotification } from './utils/notifications';
import { blueDark } from './utils/colors';
import MainNavigator from './components/MainNavigator';

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
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
