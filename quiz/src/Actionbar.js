import React from 'react';
import Button from './Button';

export default class Actionbar extends React.Component {
    render() {
        return (
            <div>
                <Button nombre={"Back"} action={"retroceder"} questions = {this.props.questions} />
                <Button nombre={"Next"} action={"avanzar"} questions = {this.props.questions}/>
                <Button nombre={"Submit"} action={"comprobar"} questions = {this.props.questions}/>
            </div>
        );
    }
}