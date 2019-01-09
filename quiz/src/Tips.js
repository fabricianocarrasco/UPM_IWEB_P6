import React from 'react';

export default class Tips extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.tips.map((tip,index)=>{
                    return <li key={index}>{tip}</li>
                })}</h4>

            </div>
        );
    }
}