import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Greetings from '../../Greetings/index.js';
import Results from '../../Results/index.js';
import Courses from '../../Courses/index.js';
import imgGreeting from '../../images/greetingImg.svg';
import search from '../../images/search.svg';

function Home() {
    const CTAheading = {
        part1: "Welcome back Anna!",
        part2: ""
    }

    const CTAcontent = {
        part1: "You’ve learned 80% of your goal this week! Keep it up and improve your results!",
        part2: ""
    }

    return (
        <React.Fragment>
            <Container>
                <section className="greetings">
                    <Container>
                        <div className="alignDiv">
                            <span className="dateClass">20 Sep 2020, Monday</span>
                            <span className="search"><img src={search} alt="" /></span>
                        </div>
                    </Container>
                </section>
                <Greetings heading={CTAheading} content={CTAcontent} image={imgGreeting} />
                <Results />
                <Courses />
            </Container>
        </React.Fragment>
    );
}

export default Home;