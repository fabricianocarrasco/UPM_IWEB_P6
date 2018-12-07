import React from 'react';
import Button from './Button';

export default class Actionbar extends React.Component {
    render() {
        return (
            <div>
                <Button value={"Back"} questionIndex = {this.props.questionIndex} onChangeQuestion={this.props.onChangeQuestion}/>
                <Button value={"Next"} questionIndex = {this.props.questionIndex} onChangeQuestion={this.props.onChangeQuestion}/>
                <Button value={"Submit"} questions = {this.props.questions} onSubmit={this.props.onSubmit}/>
            </div>
        );
    }
}