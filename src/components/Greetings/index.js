import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Greetings({ heading, content, image, button }) {
    const headingList = [];
    const contentList = [];

    Object.entries(heading).map(([key, value]) => {
        return headingList.push(value);
    })

    Object.entries(content).map(([key, value]) => {
        return contentList.push(value);
    })

    return (
        <section className="greetings">
            <Container className="greetContainer">
                <Row>
                    <Col xs={12} lg={{ span: 5, offset: 1 }} className="alignItems">
                        <h2 className="section-heading h3-medium-24">
                            {headingList[0]}
                            <br className="break" />
                            {headingList[1]}
                        </h2>
                        <p className="para-regular-16">
                            {contentList[0]}
                        </p>
                    </Col>
                    <Col xs={12} lg={{ span: 5, offset: 1 }}>
                        <img src={image} alt="" className="align_img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Greetings;