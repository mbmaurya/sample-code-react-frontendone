import React, { useState, useRef } from 'react';
import Media from 'react-media';
import { Col, Container, Row } from 'react-bootstrap';
import Greetings from '../Greetings/index.js';
import Results from '../Results/index.js';
import Courses from '../Courses/index.js';
import imgGreeting from '../../images/greetingImg.svg';
import search from '../../images/search.svg';
import Logo from '../../images/Logo.svg';
import Dashboard from '../../images/Dashboard.svg'
import Chat from '../../images/Chat.svg';
import Classes from '../../images/Classes.svg';
import LearningPlan from '../../images/Learning-plan.svg';
import Resources from '../../images/Resources.svg';
import Settings from '../../images/Setting.svg';
import Upgrade from '../../images/upgrade.svg';
import Profile from '../Profile/index.js';
import { ReactComponent as ProfileIcon } from '../../images/ProfileIcon.svg';
import { ReactComponent as MenuIcon } from '../../images/menu-icon.svg';

function Home() {

    const [selectedTab, setSelectedTab] = useState("Dashboard");
    const [mobileMenu, toggleMobileMenu] = useState(false);
    const [profileMenu, toggleProfileMenu] = useState(false);
    const toggleMenuRef = useRef(null);

    const CTAheading = {
        part1: "Welcome back Anna!",
        part2: ""
    }

    const CTAcontent = {
        part1: "You’ve learned 80% of your goal this week!",
        part2: "Keep it up and improve your results!"
    }


    const menuList = [
        {
            image: Logo,
            title: "Stringle",
            closebtn: "x"
        },
        {
            image: Dashboard,
            title: "Dashboard"
        },
        {
            image: Classes,
            title: "Classes"
        },
        {
            image: Resources,
            title: "Resources"
        },
        {
            image: LearningPlan,
            title: "Learning Plan"
        },
        {
            image: Chat,
            title: "Chat"
        },
        {
            image: Settings,
            title: "Settings"
        }
    ]

    const SidebarMenu = () => {
        return <Col lg={2} className="sidebarCol">
            <div>
                <Media queries={{ medium: { minWidth: 992 } }}>
                    {matches =>
                        matches.medium ? (
                            ""
                        ) : <p className="closeBtn" onClick={() => {
                            toggleMobileMenu();
                            setSelectedTab("Dashboard");
                        }
                        }>x</p>
                    }

                </Media>

                {/* Tab section */}

                <ul>
                    {Array.from(menuList).map((element, index) => (
                        <li key={index} className={selectedTab === 'Stringle' ? setSelectedTab("Dashboard") : selectedTab === element.title ? 'active' : ''} data-item={element.title} onClick={() => setMenuSelected(element.title)}>
                            <span>
                                {index === 0 ? <img className="logoImg" src={element.image} /> : <img src={element.image} />}
                            </span>
                            <span>{element.title}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Upgrade pro section */}
            <section className="alignUpgrade">
                <span>
                    <img className="upgradeImg" src={Upgrade} alt="upgrade" />
                </span>
                <p>Upgrade to <span>PRO</span> for more resources</p>
                <button className="button">Upgrade</button>
            </section>
        </Col>
    }

    const setMenuSelected = (value) => {
        setSelectedTab(value);
    }

    const sidebarNav = () => {
        switch (selectedTab) {
            case "Dashboard":
                return <Container className="col-lg-7 containerWidth">
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
            default:
                return <Container className="col-lg-7 containerWidth">
                    <p>This is {selectedTab}</p>
                </Container>
        }
    }

    return (
        <React.Fragment>
            <Row className="rowClass">
                {/* Media query for left pane responsive when minWidth is 992 */}
                <Media queries={{ medium: { minWidth: 992 } }}>
                    {matches =>
                        matches.medium ? (
                            <SidebarMenu />
                        ) : (
                            <div ref={toggleMenuRef}>
                                <span className="toggle-menu">
                                    <button onClick={() => toggleMobileMenu(!mobileMenu)}><MenuIcon /></button>
                                </span>

                                {
                                    mobileMenu ? <SidebarMenu /> : ""
                                }
                            </div>
                        )
                    }
                </Media>

                {/* Mid section start */}

                {sidebarNav()}

                {/* Mid section end */}

                {/* Media query for right pane responsive when minWidth is 992 */}
                <Media queries={{ medium: { minWidth: 992 } }}>
                    {matches =>
                        matches.medium ? (
                            <Profile />
                        ) : (
                            <div className="toggle-menu-prof" ref={toggleMenuRef}>
                                <span className="toggle-prof">
                                    <button onClick={() => toggleProfileMenu(!profileMenu)}><ProfileIcon /></button>
                                </span>

                                {
                                    profileMenu ? <Profile /> : ""
                                }
                            </div>
                        )
                    }
                </Media>
            </Row>
        </React.Fragment>
    );
}

export default Home;