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
      const updatedDeck = state[action.deck];
      updatedDeck.questions.push(action.card);
      return {
        ...state,
        [action.deck]: updatedDeck
      };
    default:
      return state;
  }
}
