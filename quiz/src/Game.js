import React from 'react';
import Actionbar from './Actionbar';
import Content from './Content';

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Content question = {this.props.question}  onQuestionAnswer = {this.props.onQuestionAnswer} />
                </div>
                <div>
                    <Actionbar questions = {this.props.questions} questionIndex={this.props.questionIndex} onChangeQuestion = {this.props.onChangeQuestion}/>
                </div>


            </div>
        );
    }
}