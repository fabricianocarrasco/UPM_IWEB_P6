import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <div>
                <button type="button" onClick={()=>{

                       }}
                >{this.props.nombre || ''}  </button>
                <h3>{this.props.action}</h3>
            </div>
        );
    }
}