import { Col, Container, Form, Row, Button, Accordion, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';


const CreateTodo = (props) => {
    const { fullTodoList, createNewTodo, deleteFromList, removeTodoList } = props
    const history = useHistory()
    const confirmTodoList = () => {
        history.push('/active')
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
                    {
                        fullTodoList.length !== 0 ?
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
                                <div className="m-3 text-end pt-2" >
                                    <Button variant="outline-success m-2" size="sm" onClick={confirmTodoList}>Confirm All</Button>
                                    <Button variant="outline-danger m-2" size="sm" onClick={removeTodoList}>Remove All</Button>
                                </div>
                            </Accordion>

                            :
                            <Alert variant="success">
                                There have no New Todo items.
                            </Alert>
                    }
                </Col>
            </Row>
        </Container >
    );
};

export default CreateTodo;