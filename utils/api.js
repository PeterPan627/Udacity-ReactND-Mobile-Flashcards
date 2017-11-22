import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'Mobile_Flashcards:decks';

const startingData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'Is React a Javascript UI library?',
        answer: 'Correct'
      },
      {
        question: 'Correct place to make Ajax requests is in a render method?',
        answer: 'Incorrect'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
        answer: 'Yes'
      }, 
      { 
        question: 'JavaScript is considered a weakly typed (or untyped) language?',
        answer: 'Correct'
      }
    ]
  }
}

// fetch all decks
export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(result => {
    if(result !== null) {
      return JSON.parse(result) 
    } else {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(startingData));
      return startingData;
    }
  });
}

// get single deck
export function getDeck(title) {
  return getDecks()
    .then((decks) => decks[title]);
}

// save new deck
export function saveDeckTitle(title) {
  const deckObj = { title, questions: [] };
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: deckObj
  }));
}

// add a new card
export function addCardToDeck(title, card) {
  return getDecks()
    .then((decks) => {
      decks[title].questions.push(card);
      AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks));
    });
}
