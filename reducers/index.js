import { combineReducers } from 'redux';
import { GET_ALL_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from '../actions';

export default function deckReducer(state = {}, action) {
  switch(action.type) {
    case GET_ALL_DECKS:
      return action.payload;
    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.payload
      }
    case ADD_NEW_CARD:
      console.log(state[action.deck]);
      console.log(action.card);
    default:
      return state;
  }
}
