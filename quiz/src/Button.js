import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={()=>{
                    switch (this.props.nombre) {
                        case'Back':
                            this.props.onChangeQuestion(()=>{
                                return this.props.questionIndex - 1;
                            });
                            break;
                        case'Submit':
                            this.props.onChangeQuestion();
                            break;
                        case'Next':
                            this.props.onChangeQuestion(()=>{
                                return this.props.questionIndex + 1;
                            });
                            break;
                        default:
                            break;
                    }

                       }}
                >{this.props.nombre || ''}  </button>
            </div>
        );
    }
}