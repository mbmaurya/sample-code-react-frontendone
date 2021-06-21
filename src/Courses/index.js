import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rightArrow from '../images/right_arrow_w.svg';
import arrowRight from '../images/right_arrow.svg';

function Courses() {

    const courseHeading = {
        part1: {
            courseCode: "B2",
            course: "Business English",
            topic: "Grammar",
            className: "coursesCard1"
        },
        part2: {
            courseCode: "B2",
            course: "Common English",
            topic: "Phrasal Verbs",
            className: "coursesCard2"
        },
        part3: {
            courseCode: "C1",
            course: "Business Spanish",
            topic: "Vocabulary",
            className: "coursesCard3"
        }
    }

    const courseList = [];

    Object.entries(courseHeading).map(([key, value]) => {
        return courseList.push(value);
    })

    return (
        <section>
            <Container>
                <Row className="sectionHeading">
                    <Col>
                        <p>Your courses</p>
                    </Col>
                    <Col>
                        <p>More <span><img src={arrowRight} alt="" /></span></p>
                    </Col>
                </Row>
                <Row>
                    <Col className="coursesData">
                        {Array.from(courseList).map((element, index) => (
                            <div className={element.className}>
                                <Row>
                                    <div class="placeCode"><span className="cardChild1">{element.courseCode}</span></div>
                                    <div className="childContent">
                                        <p className="pContent1">{element.course}</p><br />
                                        <p className="pContent2">{element.topic}</p>
                                    </div>
                                    <div className="arrow">
                                        <img src={rightArrow} alt="" />
                                    </div>
                                </Row>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Courses;