import React from 'react';
import Card from './Card';
import { Button, Grid } from 'semantic-ui-react';


const Cards = ({ cards, removeCard, }) => (
    <Grid>
    {
        cards.map( card => (
            <Card key={card.id} {...card} removeCard={removeCard}/>
        ))
    }
    </Grid>
);

export default Cards;