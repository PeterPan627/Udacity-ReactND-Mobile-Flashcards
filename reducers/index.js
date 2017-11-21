import { combineReducers } from 'redux';
import { GET_ALL_DECKS, ADD_NEW_DECK } from '../actions';

export default function deckReducer(state = {}, action) {
  switch(action.type) {
    case GET_ALL_DECKS:
      return action.payload;
    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
