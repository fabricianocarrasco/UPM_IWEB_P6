import { combineReducers } from 'redux';
import {CHANGE_QUESTION, INIT_QUESTIONS, QUESTION_ANSWER, SUBMIT} from "./actions";

function score(state = 0, action = {}) {
    switch(action.type) {
        case SUBMIT:
            action.payload.questions.map((questions) =>  {
                if (!(questions.userAnswer === undefined)) {
                    if (questions.answer.toUpperCase() === questions.userAnswer.toUpperCase()) {
                        state = state + 1;
                    }
                }
            });
            return state;


        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case SUBMIT:
            state= true;
            return state;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
           if (action.payload.index < 9 && action.payload.index > -1) {
               state = action.payload.index;
               return state;
           }else{
              return state;
           }

        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((question,i) =>  {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : action.payload.userAnswer}
            });
        case INIT_QUESTIONS:
            state.questions.clear();
            state.questions.push(...questions);
            return state;

        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;