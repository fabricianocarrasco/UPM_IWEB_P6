import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import {changeQuestion, questionAnswer} from "./redux/actions";

class App extends Component {
  render() {
    console.log(this.props.questions);
    return (
        <div>

            <Navbar/>

            <Game question={this.props.questions[this.props.currentQuestion]} onQuestionAnswer={(answer)=>{
            this.props.dispatch(questionAnswer(this.props.currentQuestion,answer))
            }} score={this.props.score} finished={this.props.finished} questions = {this.props.questions}
            />

        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
