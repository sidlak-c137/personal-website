import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import './MainPage.css'
import avatar from './data/photos/my-photo.jpg'
import { Link, Element} from 'react-scroll'
  
class MainPage extends React.Component {

    render() {        
        return (
            <div className="horizonal-align">
                <body>
                    <Element name="content1" className="element-top">
                        hello1
                    </Element>
                    <Element name="content2" className="element">
                        hello2
                    </Element>
                    <Element name="content3" className="element">
                        hello3
                    </Element>
                    <Element name="content4" className="element">
                        hello4
                    </Element>
                    <Element name="content5" className="element">
                        hello5
                    </Element>
                    <Element name="content6" className="element">
                        hello6
                    </Element>
                    <Element name="space" className="spacer">
                        hello7
                    </Element>
                </body>
                <div className="menu">
                    <div className="header">
                        <div className="avatarContainer">
                            <Avatar src={avatar} className="avatar"/>
                        </div>
                        <div className="name">
                            Sidharth Lakshmanan
                        </div>
                        <p>B.S. Computer Engineering Major <br /> Class of 2023 <br /> University of Washington
                            -- Seattle</p>
                    </div>
                    <div className="nav">
                            <Link className="button" activeClass="active" to="content1" spy={true} smooth={true} duration={500}><a href="#1">About</a></Link>
                            <Link className="button" activeClass="active" to="content2" spy={true} smooth={true} duration={500}><a href="#2">Tech Skills</a></Link>
                            <Link className="button" activeClass="active" to="content3" spy={true} smooth={true} duration={500}><a href="#3">College Life</a></Link>
                            <Link className="button" activeClass="active" to="content4" spy={true} smooth={true} duration={500}><a href="#4">Work Experiences</a></Link>
                            <Link className="button" activeClass="active" to="content5" spy={true} smooth={true} duration={500}><a href="#5">Research</a></Link>
                            <Link className="button" activeClass="active" to="content6" spy={true} smooth={true} duration={500}><a href="#6">Contact Me!</a></Link>
                    </div>
                    <div className="extra"></div>
                </div>
            </div>
        );
    }
}

export default MainPage;