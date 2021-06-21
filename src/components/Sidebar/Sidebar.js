import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../images/Logo.svg';
import Dashboard from '../../images/Dashboard.svg'
import Chat from '../../images/Chat.svg';
import Classes from '../../images/Classes.svg';
import LearningPlan from '../../images/Learning-plan.svg';
import Resources from '../../images/Resources.svg';
import Settings from '../../images/Setting.svg';
import Upgrade from '../../images/upgrade.svg';


function Sidebar() {

    const menuData = {
        part1: {
            image: Logo,
            title: "Stringle"
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

    const menuList = [];
    Object.entries(menuData).map(([key, value]) => {
        return menuList.push(value);
    })


    return (
        <Col lg={2} className="sidebarCol">
            <div>
                <table>
                    {Array.from(menuList).map((element, index) => (
                        <tr>
                            <td>{index === 0 ? <img className="logoImg" src={element.image} /> : <img src={element.image} />}</td>
                            <td>{element.title}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className="alignUpgrade">
                <div className="upgradeContent">
                    <img className="imgData" src={Upgrade}/>
                    <p>Upgrade to PRO  for more resources</p>
                    <button className="button">Upgrade</button>
                </div>
            </div>
        </Col>
    )
}

export default Sidebar;
