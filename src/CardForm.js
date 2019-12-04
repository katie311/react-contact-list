import React from 'react';
import { Form, } from "semantic-ui-react";

//need to use class to access 'state' in order to store user input
class CardForm extends React.Component {
    state = { question: "", answer: "", }

    componentDidMount() {
        if (this.props.id)
            this.setState({ question: this.props.question, answer: this.props.answer })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.id)
            this.props.editFlashcard({ id: this.props.id, question: this.state.question, answer: this.state.answer });
        else
            this.props.addFlashcard(this.state);
        this.setState({ question: "", answer: "", })
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value, });
    }; 

    render () {
        //object destructuring const { firstName, phone, } = this.state; could remove 'this.state' from form inputs below
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input fluid required label="Question" placeholder="Question" name="question" value={this.state.question} onChange={this.handleChange}/>
                <Form.Input fluid required label="Answer" placeholder="Answer" name="answer" value={this.state.answer} onChange={this.handleChange}/>
                <Form.Button color="blue" inverted>Submit</Form.Button>
            </Form>
        )
    };
};

export default CardForm;