import { combineReducers } from 'redux';
import {CHANGE_QUESTION, INIT_QUESTIONS, QUESTION_ANSWER, SUBMIT} from "./actions";

function score(state = 0, action = {}) {
    switch(action.type) {
        case SUBMIT:
            return questions.map((questions) =>  {
                    if (questions.answer === questions.userAnswer){
                       return state;
                    }
                    return state;
            }
            );

        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
            return state = true;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch(action.type) {
        case CHANGE_QUESTION:
            return state.map((index) =>{
               if (index < 9) {
                   return index + 1;
               }else{
                  return state;
               }

               });

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