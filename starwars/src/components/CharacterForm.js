import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const CharacterForm = (props) => {
  return (
    <Form>
        <h3> Favorites?</h3>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleHero">Hero</Label>
            <Input type="text" name="hero" id="Hero" placeholder="Hero Name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleMovie">Movie</Label>
            <Input type="text" name="movie" id="Movie" placeholder="Movie Title" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Villain</Label>
        <Input type="text" name="villain" id="Villain" placeholder="Villian Name"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Sidekick</Label>
        <Input type="text" name="sidekick" id="Sidekick" placeholder="Sidekick Name"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default CharacterForm;
