import React from 'react'
import { Container, Header, } from "semantic-ui-react";

const About = () => (
  <Container style={{ paddingTop: "30px", }}>
    <Header as='h1'>About</Header>
    <hr />
    <p>Click 'Home' to practice with our React Flash Cards App.</p>
  </Container>
);

export default About;