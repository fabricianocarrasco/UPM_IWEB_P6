import fetch from 'cross-fetch'

export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS='INIT_QUESTIONS';
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS';
export const FETCHING ='FETCHING';

export function initQuestions(questions) {
    return {type: INIT_QUESTIONS, payload: {questions}};
}
export function submit(questions) {
    return {type: SUBMIT, payload: {questions}};
}
export function changeQuestion(index){
    return {type: CHANGE_QUESTION, payload: {index}};
}
export function questionAnswer(index, answer) {
    return { type: QUESTION_ANSWER, payload: { index, answer } };
}
export function fetching(status) {
    return { type: FETCHING, payload: { status } };
}
/**
export function fetchQuizzes() {

return fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=0123456789')
            .then(
                response => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing a loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occurred.', error)
           )
            .then(json =>
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.

               console.log('wtf')
            )

}
**/