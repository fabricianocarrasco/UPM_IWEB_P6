import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <h1>Quiz</h1>
                <h2>Puntuación: {this.props.score}</h2>
            </div>
        );
    }
}