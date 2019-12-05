import React from 'react';
import Cards from './Cards';
import CardForm from './CardForm';
import { Container, Header, Button, Segment, Icon, } from "semantic-ui-react";

class Home extends React.Component {
  state = {
    cards: [
      { id: 1, question: "Question 1", answer: "Answer 1", showAnswer: false },
      { id: 2, question: "Question 2", answer: "Answer 2", showAnswer: false },
      { id: 3, question: "Question 3", answer: "Answer 3", showAnswer: false }
    ],
    // currentFlashcard: 0,
  }

  getId = () => Math.floor ((1 + Math.random()) * 10000);

  addFlashcard = ({ question, answer }) => {
    let flashcard = { id: this.getId(), question, answer }
    this.setState({ cards: [...this.state.cards, flashcard], });
  }

  editFlashcard = (newFlashcard) => {
    const cards = this.state.cards.map( originalFlashcard => {
      if (originalFlashcard.id === newFlashcard.id)
        return newFlashcard;
      return originalFlashcard;
    });
    this.setState({ cards })
  };
  // KATIE YOU CHANGED THE CODE IN LINE 31 from this.setState({ cards, })

  removeFlashcard = (id) => {
    const cards = this.state.cards.filter( flashcard => {
      if (flashcard.id !== id)
      return flashcard;
    });
    this.setState({ cards, });
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  render () {
    const { cards, }= this.state

    return (
        <Container style={{ paddingTop: "30px", }}>
          <Header as ="h1">React Flash Cards</Header>
          <br />
          <Segment basic>
              <Button icon color="blue" onClick={this.toggleForm}>Add New Card
                <Icon name={ this.state.showForm ? "angle double up" : "angle double down" } />
              </Button>
              { this.state.showForm ? <CardForm addFlashcard={this.addFlashcard} /> : null }
          </Segment>
          <br />
          <hr />
          <Cards 
              cards={ cards }
              questionContent ={this.question}
              showNextCard={this.boundShowNextCard}
              showPrevCard = {this.boundShowPrevCard}
              currentFlashcard={this.state.currentFlashcard}
              editFlashcard={ this.editFlashcard }
              removeFlashcard={ this.removeFlashcard }
            />
        </Container>
    );
  }
}

export default Home;
