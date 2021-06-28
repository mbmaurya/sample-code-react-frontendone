import React, {useState, useRef} from 'react';
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

    const [selectedTab, setSelectedTab] = useState("");
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


    const menuData = {
        part1: {
            image: Logo,
            title: "Stringle",
            closebtn: "x"
        },
        part2: {
            image: Dashboard,
            title: "Dashboard"
        },
        part3: {
            image: Classes,
            title: "Classes"
        },
        part4: {
            image: Resources,
            title: "Resources"
        },
        part5: {
            image: LearningPlan,
            title: "Learning Plan"
        },
        part6: {
            image: Chat,
            title: "Chat"
        },
        part7: {
            image: Settings,
            title: "Settings"
        },
    }

    const SidebarMenu = () => {
        return <Col lg={2} className="sidebarCol">
                    <div>
                        <table>
                            {Array.from(menuList).map((element, index) => (
                                <tr key={index} data-item={element.title} onClick={() => setMenuSelected(element.title)}>
                                    <td>
                                        {index === 0 ? <img className="logoImg" src={element.image} /> : <img src={element.image} />}
                                    </td>
                                    <td>{element.title}</td>
                                    <Media queries={{ medium: { minWidth: 992 } }}>
                                        {matches =>
                                            matches.medium ? (
                                                ""
                                            ) : element.closebtn ? <td className = "closeBtn" onClick={() => toggleMobileMenu(!mobileMenu)}>{element.closebtn}</td> : ""
                                        }
                                    </Media>
                                </tr>
                            ))}
                        </table>
                    </div>

                    <section className="alignUpgrade">
                        <span>
                            <img className="upgradeImg" src={Upgrade} alt="upgrade" />
                        </span>

                        <p>Upgrade to <span>PRO</span> for more resources</p>

                        <button className="button">Upgrade</button>
                    </section>
                </Col>
    }

    const menuList = [];
    Object.entries(menuData).map(([key, value]) => {
        return menuList.push(value);
    })

    const setMenuSelected = (value) => {
        console.log('We need to get the details for ', value);
        setSelectedTab(value);
    }

    return (
        <React.Fragment>
            <Row className="rowClass">
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
                                    mobileMenu ?
                                        <SidebarMenu />
                                        : 
                                        ""
                                }
                            </div>
                        )
                    }
                </Media>

                {/* Mid section */}

                {selectedTab === "Dashboard" ? 
                    <Container className="col-lg-7 containerWidth">
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
                    </Container> : 

                    selectedTab === "Classes" ? 
                        <Container className="col-lg-7 containerWidth">
                            <p>This is Classes</p>
                        </Container> :

                    selectedTab === "Resources" ?
                        <Container className="col-lg-7 containerWidth">
                            <p>This is Resources</p>
                        </Container> : 
                    
                    selectedTab === "Learning Plan" ?
                        <Container className="col-lg-7 containerWidth">
                            <p>This is Learning Plan</p>
                        </Container> : 
                    
                    selectedTab === "Chat" ?
                        <Container className="col-lg-7 containerWidth">
                            <p>This is Chat</p>
                        </Container> : 
                    
                    selectedTab === "Settings" ?
                        <Container className="col-lg-7 containerWidth">
                            <p>This is Settings</p>
                        </Container> : null
                }

                <Media queries={{ medium: { minWidth: 992 } }}>
                    {matches =>
                        matches.medium ? (
                            <Profile />
                        ) : (
                            <div ref={toggleMenuRef}>
                                <span className="toggle-menu">
                                    <button onClick={() => toggleProfileMenu(!profileMenu)}><ProfileIcon /></button>
                                </span>

                                {
                                    profileMenu ?
                                        <Profile />
                                        : 
                                        ""
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