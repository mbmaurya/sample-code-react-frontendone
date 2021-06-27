import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import rightArrow from '../../images/right_arrow.svg';
import downArrow from '../../images/down_arrow.svg';
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

    const resultList = [];
    const weekList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    Object.entries(CTAheading).map(([key, value]) => {
        return resultList.push(value);
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
                                            <Col>
                                                <span className="unitNo">{element.results.split("-")[0] + "-"}</span>
                                                <span className="unitName">{element.results.split("-")[1]}</span>
                                            </Col>
                                            <Col>
                                                <progress max="100" value="50"></progress>
                                                {element.unit >= 40 ? <span className="unitColor">{element.unit + "%"}</span> : <span className="unitColor1">{element.unit + "%"}</span>}
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="timeSpent">
                            <Row className="resultHeading">
                                <Col>
                                    <p>Time Spent on Learning</p>
                                </Col>
                                <Col>
                                    <p>Last week <span><img src={downArrow} alt="" /></span></p>
                                </Col>
                            </Row>
                            <div>
                                <table>
                                    <tr>
                                        <th className="C-WEWAK">Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        <th>Sat</th>
                                        <th>Sun</th>
                                    </tr>
                                    <br /><br />
                                    <tr>
                                        <td className="resultsProgress"></td>
                                        <td className="resultsProgress"></td>
                                        <td className="resultsProgress"></td>
                                        <td className="resultsProgress"></td>
                                        <td className="resultsProgress"></td>
                                        <td className="resultsProgress"></td>
                                        <td className="resultsProgress"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LatestResults;