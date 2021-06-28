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
                    <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 1 }} md={{ span: 6, offset: 1 }} sm={{ span: 6, offset: 1 }} className="alignItems">
                        <h2 className="section-heading h3-medium-24">
                            {headingList[0]}
                            <br className="break" />
                            {headingList[1]}
                        </h2>
                        <h4>
                            {contentList[0]}
                        </h4>
                        <h4>
                            {contentList[1]}
                        </h4>
                    </Col>
                    <Col xs={4} lg={{ span: 4 }} md={{ span: 4 }} sm={{ span: 4 }} >
                        <img src={image} alt="" className="align_img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Greetings;