import React from 'react';
import Button from "./Button";

export default class Game extends React.Component {
    render() {
        return (
            <div>
                {this.props.question.question}
                <input type="text" value={this.props.question.userAnswer || ''}
                    onChange={(e)=>{
                        this.props.onQuestionAnswer(e.target.value);
                    }}
                />
                <div>
                    <img src= {this.props.question.attachment.url} alt={this.props.question.attachment.url}/>
                </div>
                <div>
                    <Button nombre={"Back"} action={"retroceder"} />
                    <Button nombre={"Next"} action={"avanzar"}/>
                    <Button nombre={"Submit"} action={"comprobar"}/>
                </div>

            </div>
        );
    }
}