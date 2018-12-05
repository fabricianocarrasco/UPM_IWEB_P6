import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Image from './Image';
import Tips from './Tips'

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <Question question = {this.props.question.question}/>
                <Answer question = {this.props.question} onQuestionAnswer = {this.props.onQuestionAnswer}/>
                <Tips tips={this.props.question.tips}/>
                <Image url = {this.props.question.attachment.url}/>
            </div>
        );
    }
}