import React from 'react';
import Button from './Button';

export default class Actionbar extends React.Component {
    render() {
        return (
            <div>
                <Button nombre={"Back"} questionIndex = {this.props.questionIndex} onChangeQuestion={this.props.onChangeQuestion}/>
                <Button nombre={"Next"} questionIndex = {this.props.questionIndex} onChangeQuestion={this.props.onChangeQuestion}/>
                <Button nombre={"Submit"} questions = {this.props.questions} onQuestionAnswer={this.props.onQuestionAnswer}/>
            </div>
        );
    }
}