import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rightArrow from '../images/right_arrow.svg';
import downArrow from '../images/down_arrow.svg';
function LatestResults() {

    const CTAheading = {
        part1: {
            results: "Unit 5 - Technology",
            unit: "25"
        },
        part2: {
            results: "Unit 12 - Ecology",
            unit: "44"
        },
        part3: {
            results: "Unit 9 - Real estate",
            unit: "40"
        },
        part4: {
            results: "Unit 8 - Education",
            unit: "15"
        },
        part5: {
            results: "Unit 16 - Job market",
            unit: "75"
        },
    }

    const weekData = {
        part1: {
            day: "Mon",
            writing: { height: "25%" },
            listening: { height: "25%" },
            grammar: { height: "20%" },
            vocabulary: { height: "30%" }
        },
        part2: {
            day: "Tue",
            writing: { height: "30%" },
            listening: { height: "10%" },
            grammar: { height: "40%" },
            vocabulary: { height: "15%" }
        },
        part3: {
            day: "Wed",
            writing: { height: "15%" },
            listening: { height: "30%" },
            grammar: { height: "15%" },
            vocabulary: { height: "40%" }
        },
        part4: {
            day: "Thu",
            writing: { height: "10%" },
            listening: { height: "50%" },
            grammar: { height: "35%" },
            vocabulary: { height: "5%" }
        },
        part5: {
            day: "Fri",
            writing: { height: "15%" },
            listening: { height: "20%" },
            grammar: { height: "35%" },
            vocabulary: { height: "30%" }
        },
        part6: {
            day: "Sat",
            writing: { height: "30%" },
            listening: { height: "20%" },
            grammar: { height: "20%" },
            vocabulary: { height: "30%" }
        },
        part7: {
            day: "Sun",
            writing: { height: "20%" },
            listening: { height: "30%" },
            grammar: { height: "30%" },
            vocabulary: { height: "20%" }
        }
    }

    const resultList = [];
    const weekList = [];

    Object.entries(CTAheading).map(([key, value]) => {
        return resultList.push(value);
    })

    Object.entries(weekData).map(([key, value]) => {
        return weekList.push(value);
    })

    console.log("resultList: ", resultList[0].results);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg={5}>
                        <div className="results">
                            <Row className="resultHeading">
                                <Col>
                                    <p>Latest Results</p>
                                </Col>
                                <Col>
                                    <p>More <span><img src={rightArrow} alt="" /></span></p>
                                </Col>
                            </Row>
                            <div>
                                {Array.from(resultList).map((element, index) => (
                                    <div className="resultsData">
                                        <Row>
                                            <Col lg={7} className="unitDetails">
                                                <span className="unitNo">{element.results.split("-")[0] + "-"}</span>
                                                <span className="unitName">{element.results.split("-")[1]}</span>
                                            </Col>
                                            <Col>
                                                <progress max="100" value={element.unit}></progress>
                                                {element.unit >= 40 ? <span className="unitColor">{element.unit + "%"}</span> : <span className="unitColor1">{element.unit + "%"}</span>}
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="timeSpent results">
                            <Row>
                                <Col>
                                    <p>Time Spent on Learning</p>
                                </Col>
                                <Col>
                                    <p>Last week <span><img src={downArrow} alt="" /></span></p>
                                </Col>
                            </Row>
                            <div className="time-spent">
                                <div className="body">
                                    <ul className="progress">
                                        {Array.from(weekList).map((element, index) => (
                                            <li>
                                                <span className="day">{element.day}</span>
                                                <span className="bar">
                                                    <span className="writing" style={element.writing}></span>
                                                    <span className="listening" style={element.listening}></span>
                                                    <span className="grammar" style={element.grammar}></span>
                                                    <span className="vocabulary" style={element.vocabulary}></span>
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className="subject">
                                        <li>
                                            <span className="circle vocabulary"></span>
                                            <span className="text">Vocabulary</span>
                                        </li>
                                        <li>
                                            <span className="circle grammar"></span>
                                            <span className="text">Grammar</span>
                                        </li>
                                        <li>
                                            <span className="circle listening"></span>
                                            <span className="text">Listening</span>
                                        </li>
                                        <li>
                                            <span className="circle writing"></span>
                                            <span className="text">Writing</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LatestResults;