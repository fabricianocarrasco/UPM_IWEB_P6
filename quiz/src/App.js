import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import Navbar from "./Navbar";
import {changeQuestion, initQuestions, questionAnswer, submit, fetching} from "./redux/actions";
import Button from "./Button";

class App extends Component {
    componentDidMount(){
        this.props.dispatch(fetching(true));
        this.fetchQuestions();
    }
    fetchQuestions(){
        fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=f6ecb1ed58ae7a2e0491').then((resp)=>
                resp.json()).then(json=> {
            this.props.dispatch(initQuestions(json));
            this.props.dispatch(fetching(false));
        }).catch(error => console.log(error));
    }
  render() {
      if (!this.props.finished) {
          if (this.props.fetching){
              return(
              <div>
                    <h1>Cargando</h1>
              </div>
              )
          }else{
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
          }
      }else{
          return(
              <div>

                 <h1>Puntuación: {this.props.score}</h1>
                  {this.props.questions.map((question,index)=>{
                      return <li>{index}. {question.question} { question.userAnswer === undefined ? "No se ha respondido a la pregunta" : question.answer.toUpperCase() === question.userAnswer.toUpperCase() ? "ACIERTO" : "ERROR"}</li>
                  })}
                  <Button value='Reset' resetQuestions={() => {
                      this.props.dispatch(fetching(true));
                      this.fetchQuestions();
                  }}/>

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
