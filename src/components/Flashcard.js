import React, { Fragment } from 'react';
import CardForm from './CardForm';
import { Card, Button, Icon, } from "semantic-ui-react";


class Flashcard extends React.Component {
    state = { 
        editing: false,
        showAnswer: false
    };

    toggleFlashcard = () => {
        this.setState({showAnswer: !this.state.showAnswer});
    };

    toggleEdit = () => {
        this.setState({editing: !this.state.editing});
    };

    render() {
        const content = this.state.showAnswer ? this.props.answer : this.props.question
        return (

            <Card>
                {
                    this.state.editing ?
                    <Fragment>
                    <CardForm question={this.props.question} answer={this.props.answer} id={this.props.id} editFlashcard={this.props.editFlashcard}  toggleEdit={this.toggleEdit} />
                    

                    </Fragment>
                    :
                    
                        <Card.Content header={ content } onClick={this.toggleFlashcard}/>
                }
                    <Card.Content extra className='ui two buttons'>
                        <div className='ui two buttons'>
                            <Button color="blue" onClick={this.toggleEdit}><Icon name="pencil" />
                                Edit
                            </Button>
                            <Button color="red" onClick={() => this.props.removeFlashcard(this.props.id)}><Icon name="trash" />
                                Delete
                            </Button>
                        </div>
                    </Card.Content>
            </Card>
        );
    };
}    

export default Flashcard;