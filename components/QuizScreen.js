import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { gray, blueDark, blueLight } from '../utils/colors';
import { setLocalNotification } from './utils/notifications';
import Button from './Button';

class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      questions: [],
      currentQuestion: 0,
      correctAnswers: 0,
      show: 'question'
    }
    this.showQuestionOrAnswer = this.showQuestionOrAnswer.bind(this);
  }

  showQuestionOrAnswer() {
    if(this.state.show === 'question') {
      this.setState({ show: 'answer' });
    } else if(this.state.show === 'answer') {
      this.setState({ show: 'question' });
    }
  }

  correct() {
    console.log('correct');
  }

  incorrect() {
    console.log('incorrect');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.quizProgress}>
          <Text>Card 2/7</Text>
        </View>

        <View style={styles.quizCard}>
          {
            this.state.show == 'question'
            ? <Text style={styles.questionText}>Question ??</Text>
            : <Text style={styles.answerText}>Answer</Text>
          }

          <TouchableWithoutFeedback
            onPress={this.showQuestionOrAnswer}
          >
            <View>
              {
                this.state.show == 'question'
                ? <Text>Show Answer</Text>
                : <Text>Show Question</Text>
              }
            </View>
          </TouchableWithoutFeedback>

          <View>
            <Button text='Correct' func={this.correct}/>
            <Button text='Incorrect' func={this.incorrect}/>
          </View>
        </View>
      </View>
    );
  }
}

/*
clearLocalNotification()
      .then(setLocalNotification)
*/

const styles = StyleSheet.create({
  quizProgress: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    backgroundColor: blueLight
  },
  quizCard: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 25,
    padding: 25,
    backgroundColor: gray,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3
  },
  questionText: {
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  answerText: {
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: blueDark
  }
});

function mapStateToProps(state, ownProps) {
  return { deck: state[ownProps.navigation.state.params.deck] };
}

export default connect(mapStateToProps)(QuizScreen);