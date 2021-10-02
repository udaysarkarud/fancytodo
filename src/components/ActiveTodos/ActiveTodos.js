import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
let bgClass = 0
const ActiveTodos = (props) => {
    const { fullTodoList } = props
    return (
        <Container className="p-5">
            <Row md={3} className="g-4">

                {
                    fullTodoList.map(todoActive =>
                        <Col key={todoActive.todoKey} jak={bgClass++}>
                            <Card bg={bgClass % 2 === 0 ? "success" : "secondary"} text="white" className="mb-2">
                                <Card.Header><Card.Title>{todoActive.title}</Card.Title></Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {todoActive.details}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                }


            </Row>
        </Container>
    );
};

export default ActiveTodos;