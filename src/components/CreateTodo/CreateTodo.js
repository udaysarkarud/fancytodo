import { useState } from 'react';
import { Col, Container, Form, Row, Button, Accordion } from 'react-bootstrap';

const CreateTodo = () => {
    const [fullTodoList, setFullTodoList] = useState([])

    let title;
    let details;
    const newTodo = {};

    const createNewTodo = () => {
        title = document.getElementById('title').value;
        details = document.getElementById('details').value;
        document.getElementById('title').value = '';
        document.getElementById('details').value = '';
        newTodo.todoKey = parseInt(Math.random() * 3790);
        newTodo.title = title;
        newTodo.details = details;
        setFullTodoList([...fullTodoList, newTodo])
    }

    const deleteFromList = (todoId) => {
        console.log(todoId)
    }
    return (
        <Container>
            <Row bg="secondary">
                <Col className="p-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Todo Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="details">
                            <Form.Label>Todo Details</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <Form.Group>
                            <Button variant="outline-dark" size="lg" onClick={createNewTodo}>Add To List</Button>
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="p-5">
                    <Accordion>
                        {
                            fullTodoList.map(singleTodo =>
                                <Accordion.Item eventKey={singleTodo.todoKey} key={singleTodo.todoKey}>
                                    <Accordion.Header>{singleTodo.title}</Accordion.Header>
                                    <Accordion.Body>
                                        {singleTodo.details}<br />
                                        <div className="m-3 text-end border-top border-warning pt-2" >
                                            <Button variant="outline-danger" size="sm" onClick={() => deleteFromList(singleTodo.todoKey)}>Delte</Button>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>

                            )
                        }
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default CreateTodo;