import React from 'react';
import { Button, Table, } from "semantic-ui-react";

class Card extends React.Component {
    state = {
        showAnswer: false
    }

    toggleCard = () => {
        this.setState({showAnswer: !this.state.showAnswer});
    };

    render() {
        const content = this.state.showAnswer ? this.props.answer : this.props.question
        return (
            <div onClick={this.toggleCard}>
                <h2>{ content }</h2>
                <div>
                <Button color="red" onClick={() => this.props.removeCard(this.props.id)}>
                    Delete
                </Button>
            </div>
            </div>
        );
    };
}    

export default Card;