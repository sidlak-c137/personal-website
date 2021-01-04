import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button'
import GetAppIcon from '@material-ui/icons/GetApp';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import CloudIcon from '@material-ui/icons/Cloud';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import WebIcon from '@material-ui/icons/Web';
import GroupIcon from '@material-ui/icons/Group';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import './MainPage.css'
import avatar from './data/photos/my-photo.jpg'
import banner from './data/photos/dev-black.png'
import ecsite from './data/photos/ecsite.jpg'
import keeperhr from './data/photos/keeperhr.png'
import launch from './data/photos/launch.png'
import resume from "./data/files/Lakshmanan_Sidharth_CE_Resume.pdf"
import { Link, Element} from 'react-scroll'
  
class MainPage extends React.Component {

    listItem = (element, text) => {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar style={{ background: '#4F90CD' }}>
                        {element}
                    </Avatar>
                </ListItemAvatar>
                {text}
            </ListItem>
        );
    }

    render() {
        var styleButton = {
            background: '#4F90CD',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
        };     
        return (
            <div className="horizonal-align">
                <body>
                    <Element name="content1" className="element-top">
                        <div className="banner">
                            <img src={banner} alt="code banner"/>
                        </div>
                        <div class="container">
                            <header class="major">
                                <h2>cout {'<<'} "Hello, I am Sid!";</h2>
                                <p>
                                    <pre><code> {'>'}   Hello, I am Sid!</code></pre>
                                </p>
                            </header>
                            <p>
                                <i><b>Welcome to my page! You must be wondering who I am...</b></i> <br /> <br /> Well let me give
                                you a brief introduction. My name is Sidharth, but most people call me Sid. I am currently 
                                a sophomore at the University of Washington (Seattle) completing my bachelor's degree in Computer Engineering at the <a
                                    href="https://www.cs.washington.edu/" target="_blank" rel="noreferrer"> Paul G. Allen School of Computer
                                    Science and Engineering</a>.  
                            </p>
                        </div>
                    </Element>
                    <Element name="content2" className="element">
                        <div class="container">
                            <h3>Tech Skills</h3>
                            <Button
                                variant="contained"
                                style={styleButton}
                                startIcon={<GetAppIcon />}
                                href={resume}
                                target="_blank"
                            >
                                Resume
                            </Button>
                            <p>You can see my resume above, but here is a quick summary of the tech skills I have acquired
                                through previous internships and coursework. </p>
                            <h4>Programming Languages</h4>
                            <div className="split">
                                <List style={{flex: "50%"}}>
                                    {this.listItem(<CodeIcon />, "Java")}
                                    {this.listItem(<CodeIcon />, "Python")}
                                    {this.listItem(<CodeIcon />, "MATLAB")}
                                    
                                </List>
                                <List style={{flex: "50%"}}>
                                    {this.listItem(<CodeIcon />, "C/C++")}
                                    {this.listItem(<CodeIcon />, "R")}
                                    
                                </List>
                            </div>
                            <br/>
                            <h4>Frameworks / Tools</h4>
                            <div className="split">
                                <List style={{flex: "50%"}}>
                                    {this.listItem(<DeveloperBoardIcon />, "Embedded Systems")}
                                    {this.listItem(<CloudIcon />, "Google Cloud Platform")}
                                    {this.listItem(<DeveloperModeIcon />, "Flutter")}
                                    {this.listItem(<GroupIcon />, "Git")}
                                    
                                </List>
                                <List style={{flex: "50%"}}>
                                    {this.listItem(<WebIcon />, "ReactJS")}
                                    {this.listItem(<SettingsApplicationsIcon />, "NodeJS")}
                                    {this.listItem(<TextFieldsIcon />, "LaTeX")}
                                </List>
                            </div>
                        </div>
                    </Element>
                    <Element name="content3" className="element">
                        <div class="container">
                            <h3>Work Experiences</h3>
                            <p>Here is a brief summary of my previous internships. Please feel free to reach out to me if you
                                are curious about my internship experiences.</p>
                            <div className="split underline">
                                <div style={{flex: "50%", alignSelf:"center"}}>
                                    <img src={ecsite} style={{width: "80%"}}/>
                                </div>
                                <div style={{flex: "50%"}}>
                                    <header>
                                        <h4>ECSite App</h4>
                                        <p>
                                            June 2020 - September 2020 | Software Development Intern
                                        </p>
                                    </header>
                                    <p>
                                        <b>What is ECSite App?</b><br />
                                        <a href="https://ecsiteapp.com/" target="_blank" rel="noreferrer"> ECSite</a> is a Silicon Valley startup whose mission is to provide an end-to-end enterprise SaaS
                                        platform for (highly technical) data collection/analysis and reporting during construction, installation,
                                        commissioning, and ongoing performance operations of wireless telecom infrastructure leading into 5G and beyond.
                                    </p>
                                    <p>
                                        <b>What did I do?</b><br />
                                        During my internship, I created a ReactJS-based form to allow customers to input large amounts data
                                        (upwards of 10GBs) for future processing. This included a backend webserver using Express/NodeJS to handle these files. I also
                                        generalized this form into a template such that this form template could be used for all of their future needs. My work resulted
                                        in them being able to have the bandwidth to handle a larger number of customer orders.   
                                    </p>
                                </div>
                            </div>
                            <div className="split underline">
                                <div style={{flex: "50%", alignSelf:"center"}}>
                                    <img src={keeperhr} style={{width: "80%", borderRadius: "50%"}}/>
                                </div>
                                <div style={{flex: "50%"}}>
                                    <header>
                                        <h4>KeeperHR</h4>
                                        <p>
                                            June 2019 - February 2020 | Software Development Intern
                                        </p>
                                    </header>
                                    <p>
                                        <b>What is KeeperHR?</b><br />
                                        <a href="https://www.keeperhr.com/" target="_blank" rel="noreferrer"> KeeperHR</a> is a startup whose mission is to
                                        create a application to illustrate the "soft skills" of an individual through the use of imagery and artificial intelligence.
                                        This application will therefore allow workplaces to capture cultural, social, and behavioral insights to develop strong, diverse,
                                        and effective teams.
                                    </p>
                                    <p>
                                        <b>What did I do?</b><br />
                                        During my internship, the application was still in the process of being developed, so I got to see the process of developing the
                                        application from the gound up. This meant that I was able to "wear many hats" as I was the QA engineer, and a frontend developer.
                                        This meant that I wa responsible for the creation of several front-end components as well as writing unit tests for every other component
                                        (using a tool called Jest). Additionally, I was part of the marketing effort as we collected user input about the application. From
                                        this experience, I not only learned how to develop ReactJS based apps from the ground up, but I also got to experience the initial
                                        stages of a growing start-up. My work at KeeperHR allowed the frontend and backend developers to be able to be more efficient, as they
                                        did not have to worry about trying to find and fix bugs, and effective, as the user feedback I collected made the application more
                                        user-friendly.
                                    </p>
                                </div>
                            </div>
                            <div className="split">
                                <div style={{flex: "50%", alignSelf:"center"}}>
                                    <img src={launch} style={{width: "80%"}}/>
                                </div>
                                <div style={{flex: "50%"}}>
                                    <header>
                                        <h4>Launch Consulting</h4>
                                        <p>
                                            June 2018 - August 2018 | QA Engineer Intern
                                        </p>
                                    </header>
                                    <p>
                                        <b>What is Launch Consulting?</b><br />
                                        <a href="https://launchconsulting.com/" target="_blank" rel="noreferrer"> Launch Consulting</a> is an entrepreneurial business
                                        and technology consultancy whose mission is to help businesses and people take their technological endeavors to the next level. Some
                                        of their clients include Microsoft, Google, Facebook, Amazon, and Dendreon.
                                    </p>
                                    <p>
                                        <b>What did I do?</b><br />
                                        Because this was my very first internship, I was tasked with working as a QA engineering intern, debugging and writing tests for the Google
                                        Cloud Hero emmersive game. This game was designed to tech developers how to use the Google Cloud platform. So, through this experience, I learned
                                        how to use Google Cloud. In addition to debugging this application, I also was a key part in the deployment of the application as I was tasked with
                                        monitoring and fixing performance issues on the day of launch. Therefore, because of the work I did, the launch of the Cloud Hero game (at Google
                                        Cloud Summit 2018) was very successful.   
                                    </p>
                                </div>
                            </div>
                        </div>
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
                            <Link className="button" activeClass="active" to="content1" spy={true} smooth={true} duration={500}><a className="a" href="#1">About</a></Link>
                            <Link className="button" activeClass="active" to="content2" spy={true} smooth={true} duration={500}><a className="a" href="#2">Tech Skills</a></Link>
                            <Link className="button" activeClass="active" to="content3" spy={true} smooth={true} duration={500}><a className="a" href="#3">Work Experiences</a></Link>
                            <Link className="button" activeClass="active" to="content4" spy={true} smooth={true} duration={500}><a className="a" href="#4">Student Life</a></Link>
                            <Link className="button" activeClass="active" to="content5" spy={true} smooth={true} duration={500}><a className="a" href="#5">Research</a></Link>
                            <Link className="button" activeClass="active" to="content6" spy={true} smooth={true} duration={500}><a className="a" href="#6">Contact Me!</a></Link>
                    </div>
                    <div className="extra"></div>
                </div>
            </div>
        );
    }
}

export default MainPage;