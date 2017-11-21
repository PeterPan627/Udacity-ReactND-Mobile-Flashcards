import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MobileFlashcards';

const startingData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

// fetch all decks
export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    return result !== null ? JSON.parse(result) : startingData;
  });
}

// ?????
export function getDeck(id) {
  return AsyncStorage.getItem(id, (err, result) => result);
}

// save new deck
export function saveDeckTitle(title) {
  const saveObj = { title, questions: [] };
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: saveObj
  }));
}

// ?????
export function addCardToDeck(title, card) {
  return;
  // add card to a decks questions 
}
