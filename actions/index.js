import { getDecks } from '../utils/api';

export const GET_ALL_DECKS = 'GET_ALL_DECKS';
export const SELECT_DECK = 'SELECT_DECK';

export function getAllDecks() {
  return (dispatch) => {
    getDecks()
      .then((decks) => {
        dispatch({
          type: GET_ALL_DECKS, 
          payload: decks
        })
      })
  }
}

export function selectDeck() {
  return;
}
