import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import {changeQuestion, initQuestions, questionAnswer, submit} from "./redux/actions";

class App extends Component {
  render() {
      if (!this.props.finished) {
          console.log(this.props.questions);
          return (
              <div>

                  <Navbar score={this.props.score}/>

                  <Game question={this.props.questions[this.props.currentQuestion]}
                        questionIndex={this.props.currentQuestion}
                        onQuestionAnswer={(answer) => {
                            this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                        }}
                        onChangeQuestion={(index) => {
                            this.props.dispatch(changeQuestion(index))
                        }}
                        onSubmit={() => {
                            this.props.dispatch(submit(this.props.questions))
                        }}
                        onInitQuestions={(questions) => {
                            this.props.dispatch(initQuestions(questions))
                        }}
                  />

              </div>
          );
      }else{
          return(
              <div>

                 <h1>Puntuacion: {this.props.score}</h1>

              </div>
          )
      }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
