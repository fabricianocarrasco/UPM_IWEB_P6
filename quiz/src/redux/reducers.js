import { combineReducers } from 'redux';
import {CHANGE_QUESTION, FETCHING, INIT_QUESTIONS, QUESTION_ANSWER, SUBMIT, RESET, DECREMENT} from "./actions";

function score(state = 0, action = {}) {
    let newState;
    switch(action.type) {
        case SUBMIT:
            newState = state;
            action.payload.questions.map((questions) =>  {
                if (!(questions.userAnswer === undefined)){
                    if (questions.answer.toUpperCase() === questions.userAnswer.toUpperCase()){
                       newState = newState +1;
                    }
                    }
            });
            return newState;
        case RESET:
            return 0;

        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return true;
        case FETCHING:
            return false;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    let newState;
    switch(action.type) {
        case CHANGE_QUESTION:
            newState = state;
           if (action.payload.index < 10 && action.payload.index > -1) {
               newState = action.payload.index;
               return newState;
           }else{
              return state;
           }
        case FETCHING:
            return 0;

        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    let newState;
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((question,i) =>  {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : question.userAnswer}
            });
        case INIT_QUESTIONS:
            //newState = JSON.parse(JSON.stringify(state));
            //newState.clear();
            newState = [];
            //newState.push(...questions);
            newState.push(...action.payload.questions);
            return newState;

        default:
            return state;
    }
}
function fetching(state = false, action={}){
    switch(action.type) {
        case FETCHING:
            return action.payload.status;
        default:
            return state;
    }
}
function timer(state = 60, action={}) {
    switch(action.type) {
    case DECREMENT:
        return state - 1;
    case FETCHING:
        return 60;
    default:
        return state;
    }

}
const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions,
    fetching,
    timer
}));

export default GlobalState;