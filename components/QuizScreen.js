import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableWithoutFeedback,
  AsyncStorage, 
  StyleSheet } from 'react-native';
import { Notifications } from 'expo';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { gray, blueDark, blueLight } from '../utils/colors';
import { setLocalNotification, NOTIFICATION_KEY } from '../utils/notifications';
import Button from './Button';

class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentQuestion: 0,
      correctAnswers: 0,
      show: 'question',
      showResults: false
    };
    this.showQuestionOrAnswer = this.showQuestionOrAnswer.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
  }

  showQuestionOrAnswer() {
    if(this.state.show === 'question') {
      this.setState({ show: 'answer' });
    } else if(this.state.show === 'answer') {
      this.setState({ show: 'question' });
    }
  }

  userAnswered(answer) {
    const rightAnswer = this.props.questions[this.state.currentQuestion].answer;
    if(answer === 'correct') {
      if(rightAnswer === 'Correct' || rightAnswer === 'Yes') {
        this.setState({ correctAnswers: this.state.correctAnswers + 1 });
      }
    } else if(answer === 'incorrect') {
      if(rightAnswer === 'Incorrect' || rightAnswer === 'No') {
        this.setState({ correctAnswers: this.state.correctAnswers + 1 });
      }
    }
    
    if(this.state.currentQuestion === this.props.questions.length -1) {
      this.setState({ showResults: true });
    } else {
      this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    }
  }

  restartQuiz() {
    this.setState({
      currentQuestion: 0,
      correctAnswers: 0,
      show: 'question',
      showResults: false
    });

    AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)    
  }

  render() { 
    if(this.props.questions.length === 0) {
      return (
        <View style={styles.noCards}>
          <Text style={styles.noCardsText}>This deck has no question cards.</Text>
        </View>
      )
    }

    if(this.state.showResults) {
      return (
        <View style={styles.resultCard}>
          <Text style={styles.resultCardText}>Total questions answered: {this.props.questions.length}</Text>
          <Text style={styles.resultCardText}>Correct Answers: {this.state.correctAnswers}</Text>
          <Button text='Restart' func={this.restartQuiz} />
          <Button text='Go Back' func={() => this.props.navigation.dispatch(NavigationActions.back())} />
        </View>
      )
    }
    
    const showingCard = this.props.questions[this.state.currentQuestion];

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.quizProgress}>
          <Text>Card {this.state.currentQuestion + 1}/{this.props.questions.length}</Text>
        </View>

        <View style={styles.quizCard}>
          {
            this.state.show == 'question'
            ? <Text style={styles.questionText}>{showingCard.question}</Text>
            : <Text style={styles.answerText}>{showingCard.answer}</Text>
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
            <Button text='Correct' func={() => {
              this.userAnswered('correct')
            }}/>
            <Button text='Incorrect' func={() => {
              this.userAnswered('incorrect')
            }}/>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  noCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noCardsText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  resultCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
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
  return { questions: state[ownProps.navigation.state.params.deck].questions };
}

export default connect(mapStateToProps)(QuizScreen);