import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import signOut from '../../images/sign-out.svg';
import profileImg from '../../images/Profile.svg';
import reminders from '../../images/reminders.svg';
import AlertImage from '../../images/Alert.svg';
import MessageImage from '../../images/Message.svg';

function Profile() {

    const courseProfileList = [
        {
            courseCode: "B2",
            course: "English",
            topic: "High Intermediate",
            progressPercent: "50"
        },
        {
            courseCode: "C1",
            course: "Spanish",
            topic: "Advanced",
            progressPercent: "80"
        }
    ]

    const reminderHeadingList = [
        {
            image: AlertImage,
            message: "Eng - Vocabulary test",
            date: "24 Sep 2019, Firday"
        },
        {
            image: MessageImage,
            message: "Eng - Send grammer homework",
            date: "29 Sep 2019, Wednesday"
        },
        {
            image: MessageImage,
            message: "Spanish - Send essay",
            date: "05 oct 2019, Monday"
        }
    ]

    return (
        <Container className="profileCont">
            <Row>
                <Col>
                    <p>Logout</p>
                </Col>
                <Col>
                    <img src={signOut} alt="" />
                </Col>
            </Row>
            <div className="alignProfile">
                <img src={profileImg} />
                <h3>Sadia Tasnim</h3>
                <h5>Student</h5>
            </div>

            <div className="profileCard">
                {Array.from(courseProfileList).map((element, index) => (
                    <Row>
                        <div className="placeItems"><span className="cardChild1">{element.courseCode}</span></div>
                        <div className="childContent">
                            <p className="pContent1">{element.course}</p><br />
                            <p className="pContent2">{element.topic}</p>
                        </div>
                        <div className="courseProgress">
                            <progress max="100" value={element.progressPercent}></progress>
                        </div>
                    </Row>
                ))}
            </div>

            <Row>
                <Col>
                    <p>Reminders</p>
                </Col>
                <Col>
                    <img src={reminders} alt="" />
                </Col>
            </Row>

            <div className="profileCard">
                {Array.from(reminderHeadingList).map((element, index) => (
                    <Row>
                        <div className="placeItems">
                            <div className="cardChild1">
                                <img src={element.image} />
                            </div>
                        </div>
                        <div className="childContent remWidth">
                            <p className="pContent1">{element.message}</p><br />
                            <p className="pContent2">{element.date}</p>
                        </div>
                    </Row>
                ))}
            </div>

        </Container>
    )
}

export default Profile;

