import React from 'react';
import Cards from './Cards';
import CardForm from './CardForm';
import './App.css';
import { Container, Header, Button, Segment, Icon, } from "semantic-ui-react";

class App extends React.Component {
  state = {
    cards: [
      { id: 1, question: "Question 1", answer: "Answer 1", showAnswer: false },
      { id: 2, question: "Question 2", answer: "Answer 2", showAnswer: false },
      { id: 3, question: "Question 3", answer: "Answer 3", showAnswer: false }
    ],
    currentCard: 0,
  }

  getId = () => Math.floor ((1 + Math.random()) * 10000);

  addCard = ({ question, answer }) => {
    let card = { id: this.getId(), question, answer }
    this.setState({ cards: [...this.state.cards, card], });
  }

  editCard = (id) => {
    
  }

  removeCard = (id) => {
    const cards = this.state.cards.filter( card => {
      if (card.id !== id)
      return card;
    });
    this.setState({cards, });
  };

  toggleForm = () => this.setState({ showForm: !this.state.showForm, })

  // renderCards = () => {
  //   const { cards } = this.state;
  //   return cards.map( card => 
  //     <li key={card.id}>{card.question}</li>
  //     ) 
  // };

  render () {
    const { cards }= this.state


    return (
      <Container style={{ paddingTop: "30px", }}>
        <Header as = "h1">React Flash Cards</Header>
        <br />
        <Segment basic>
            <Button icon color="blue" onClick={this.toggleForm}>
              <Icon name={ this.state.showForm ? "angle double up" : "angle double down" } />
            </Button>
            { this.state.showForm ? <CardForm addCard={this.addCard} /> : null }
        </Segment>
        <br />
        <hr />
        <Cards 
            cards={ cards }
            questionContent ={this.question}
            // showNextCard={this.boundShowNextCard}
            // showPrevCard = {this.boundShowPrevCard}
            currentCard={this.state.currentCard}
          />
      </Container>
    );
  }
}

export default App;
