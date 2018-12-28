import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={()=>{
                    switch (this.props.value) {
                        case'Back':
                            return this.props.onChangeQuestion(this.props.questionIndex - 1);
                        case'Submit':
                            return this.props.onSubmit();
                        case'Next':
                            return this.props.onChangeQuestion(this.props.questionIndex + 1);
                        case 'Reset':
                            return this.props.resetQuestions();
                        case 'Play more':
                            return this.props.playMore();
                        default:
                            return 0;
                    }
                }}>{this.props.value || ''}  </button>
            </div>
        );
    }
}