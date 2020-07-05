import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ModalShow from './ModalShow';
import Col from 'react-bootstrap/Col';

export default class AddLog extends Component {
    render() {
        return (
            <Col md={{ span: 6, offset: 3 }}>
                <Form onSubmit={this.props.submitForm}>
                    <Form.Group controlId="food-name">
                        <Form.Label>Food Name</Form.Label>
                        <Form.Control name="food" type="text" placeholder="pizza" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Choose type of meal</Form.Label>
                        <Form.Check type="radio" value="breakfast" label="breakfast" id="breakfast" name="meal" required />
                        <Form.Check type="radio" value="lunch" label="lunch" id="lunch" name="meal" required />
                        <Form.Check type="radio" value="dinner" label="dinner" id="dinner" name="meal" required />
                    </Form.Group>
                    <Form.Check 
                        className="mb-4 mt-4"
                        type="switch"
                        id="custom-switch"
                        name="drink"
                        label="Did you drink something?"
                    />
                    <Form.Group controlId="meal">
                        <Form.Label>Where did you eat your food?</Form.Label>
                        <Form.Check type="radio" label="bed-room" value="bed-room" id="bed-room" name="environment" required />
                        <Form.Check type="radio" label="living-room" value="living-room" id="living-room" name="environment" required />
                        <Form.Check type="radio" label="dining-table" value="dining-table" id="dining-table" name="environment" required />
                        <Form.Check type="radio" label="balcony" value="balcony" id="balcony" name="environment" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Comments (optional)</Form.Label>
                        <Form.Control name="comments" as="textarea" rows="3" />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
                <ModalShow hideModal={this.props.hideModal} showModal={this.props.showModal} />
            </Col>
        )
    }
}