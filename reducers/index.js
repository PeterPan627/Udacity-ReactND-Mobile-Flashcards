import { combineReducers } from 'redux';
import { GET_ALL_DECKS, SELECT_DECK } from '../actions';

function deckReducer(state = {}, action) {
  if(action.type === GET_ALL_DECKS) {
    return action.payload;
  }
  return state;
}

function selectedDeckReducer(state = null, action) {
  if(action.type === GET_ALL_DECKS) {
    //return action.payload;
    return state
  }
  return state;
}

export default combineReducers({
  decks: deckReducer,
  selectedDeck: selectedDeckReducer
});
