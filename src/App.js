import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import './App.css';
import ContactsForm from './Components/ContactsForm';
import Contacts from './Components/Contacts';

const App = () => {

  return (
    <div className='to-do-app'>
      <Container fluid>
        <Row>
          <Col>
            <Stack gap={2} className="col-md-12 mx-auto">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Add Contact</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <ContactsForm />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Stack></Col>
        </Row>
        <div>
          <Stack gap={2} className="col-md-12 mx-auto">
            <Contacts /> 
          </Stack>
        </div>
      </Container>
    </div>
  );

}

export default App;
