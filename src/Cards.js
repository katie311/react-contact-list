import React from 'react';
import Flashcard from './Flashcard';
import { Card, } from 'semantic-ui-react';


const Cards = ({ cards, removeFlashcard, editFlashcard, }) => (
    <Card.Group itemsPerRow={4}>
    {
        cards.map( flashcard => (
            <Flashcard key={flashcard.id} {...flashcard} editFlashcard={editFlashcard} removeFlashcard={removeFlashcard}/>
        ))
    }
    </Card.Group>
);

export default Cards;