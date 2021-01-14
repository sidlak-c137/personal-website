import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GetAppIcon from '@material-ui/icons/GetApp';
import CodeIcon from '@material-ui/icons/Code';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import CloudIcon from '@material-ui/icons/Cloud';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import WebIcon from '@material-ui/icons/Web';
import GroupIcon from '@material-ui/icons/Group';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import './MainPage.css';
import avatar from './data/photos/my-photo.jpg';
import banner from './data/photos/dev-white.jpg';
import ecsite from './data/photos/ecsite.jpg';
import keeperhr from './data/photos/keeperhr.png';
import launch from './data/photos/launch.png';
import seal from './data/photos/seal.png';
import ecocar from './data/photos/ecocar.png';
import afsl from './data/photos/afsl.png';
import resume from "./data/files/Lakshmanan_Sidharth_CE_Resume.pdf";
import { Link, Element} from 'react-scroll';
import emailjs from 'emailjs-com';
import {isMobileOnly} from 'react-device-detect';

const StyledTableCell = withStyles({
    head: {
      backgroundColor: "#fff",
    }
  })(TableCell);
  
const StyledTableRow = withStyles({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: "rgb(243, 243, 243)",
        },
    },
})(TableRow);



class MainPage extends React.Component {

    state = {
        name: "",
        subject: "",
        email: "",
        message: "",
        error: "",
        submitted: false,
    }

    createData = (name, calories, fat, carbs, protein) => {
        return { name, calories, fat, carbs, protein };
      }

    currData = (name, url, id_temp, description) => {
        var id = <h5 className="table"><a href={url} target="_blank" rel="noreferrer">{id_temp}</a></h5>
        return { name, id, description}
    }

    pastData = (name, url, id_temp, date) => {
        var id = <h5 className="table"><a href={url} target="_blank" rel="noreferrer">{id_temp}</a></h5>
        return { name, id, date}
    }

    pastMData = (name, id, description, date) => {
        return { name, id, description, date}
    }

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

    validate = () => {
        var {name, subject, message, email} = this.state;
        if (name === "") {
            return false;
        }
        if (subject === "") {
            return false;
        }
        if (message === "") {
            return false;
        }
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    submit = async (e) => {
        var {name, subject, message, email} = this.state;
        var templateParams = {
            from_name: name,
            from_subject: subject,
            from_message: message,
            from_email: email
        }
        await emailjs.send('service_qmyn4v3','template_rj5l7kv', templateParams, 'user_RCHqxqia7CNjOw3h1v56V')
        .then((response) => {
           console.log('SUCCESS!', response.status, response.text);
           this.setState({submitted: true});
        }, (err) => {
           console.log('FAILED...', err);
           this.setState({error: "Failed to send message, try again!"});
        });
    } 

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value });
    }

    renderWeb = () => {
        var currData = this.currData;
        var pastData = this.pastData;
        var pastMData = this.pastMData;
        var currRows = [
            currData('Foundations of Computing II (Statistics)', "http://courses.cs.washington.edu/courses/cse312/", "CSE 312", "Examines fundamentals of enumeration and discrete probability; applications of randomness to computing; polynomial-time versus NP; and NP-completeness."),
            currData('Programming Languages', "http://courses.cs.washington.edu/courses/cse341/", "CSE 341", "Basic concepts of programming languages, including abstraction mechanisms, types, and scoping. Detailed study of several different programming paradigms, such as functional, object-oriented, and logic programming."),
            currData('Data Structures & Parrallelism', "http://courses.cs.washington.edu/courses/cse332/", "CSE 332", "Covers abstract data types and structures including dictionaries, balanced trees, hash tables, priority queues, and graphs; sorting; asymptotic analysis; fundamental graph algorithms including graph search, shortest path, and minimum spanning trees; concurrency and synchronization; and parallelism."),
        ];
        var pastCSRows = [
            pastData('Introduction to Embedded Systems', "http://courses.cs.washington.edu/courses/cse474/", "CSE 474", "Fall 2020"),
            pastData('Foundations of Computing I (Discrete Math)', "http://courses.cs.washington.edu/courses/cse311/", "CSE 311", "Fall 2020"),
            pastData('Systems Programming', "http://courses.cs.washington.edu/courses/cse333/", "CSE 333", "Summer 2020"),
            pastData('Intermediate Data Programming', "http://courses.cs.washington.edu/courses/cse163/", "CSE 163", "Summer 2020"),
            pastData('Hardware / Software Interface', "http://courses.cs.washington.edu/courses/cse351/", "CSE 351", "Winter 2020"),
            pastData('Computer Programming II (Intro to Java II)', "http://courses.cs.washington.edu/courses/cse143/", "CSE 143", "Autumn 2019"),
        ];
        var pastMRows = [
            pastMData('Statistical Methods in Engineering and Science', "STAT 390", "Concepts of probability and statistics. Conditional probability, independence, random variables, distribution functions. Descriptive statistics, transformations, sampling errors, confidence intervals, least squares and maximum likelihood. Exploratory data analysis and interactive computing. ", "Spring 2020"),
            pastMData('Advanced Multivariable Calculus', "MATH 324", "Topics include double and triple integrals, the chain rule, vector fields, line and surface integrals. Culminates in the theorems of Green and Stokes, along with the Divergence Theorem.", "Spring 2020"),
            pastMData('Matrix Algebra', "MATH 308", "Systems of linear equations, vector spaces, matrices, subspaces, orthogonality, least squares, eigenvalues, eigenvectors, applications. For students in engineering, mathematics, and the sciences.", "Winter 2020"),
            pastMData('Intro to Differential Equations', "MATH 307", "Introductory course in ordinary differential equations. Includes first- and second-order equations and Laplace transform.", "Winter 2020"),
            pastMData('Calculus III', "MATH 126", "Third quarter in calculus sequence. Introduction to Taylor polynomials and Taylor series, vector geometry in three dimensions, introduction to multivariable differential calculus, double integrals in Cartesian and polar coordinates.", "Autumn 2019"),
        ];
        var pastERows = [
            pastMData('Fundamentals of Electrical Engineering', "EE215", "Introduction to electrical engineering. Basic circuit and systems concepts. Mathematical models of components. Kirchhoff's laws. Resistors, sources, capacitors, inductors, and operational amplifiers. Solution of first and second order linear differential equations associated with basic circuit forms.", "Summer 2020"),
            pastMData('Electromagnetism', "PHYS 122", "Covers the basic principles of electromagnetism and experiments in these topics for physical science and engineering majors.", "Spring 2020"),
        ];
        var styleButton = {
            background: '#4F90CD',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
        };
        var styleButtonDis = {
            background: 'rgb(243, 243, 243)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
        };  
          
        return (
            <div className="horizonal-align">
                <div>
                    <body>
                        <Element name="content1" style={{height: 768}} className="element-top">
                            <div className="banner">
                                <img src={banner} alt="code banner"/>
                            </div>
                            <div className="container">
                                <header className="major">
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
                        <Element name="content2" style={{height: 843}} className="element">
                            <div className="container">
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
                        <Element name="content3" style={{height: 2743}} className="element">
                            <div className="container">
                                <h3>Work Experiences</h3>
                                <p>Here is a brief summary of my previous internships. Please feel free to reach out to me if you
                                    are curious about my internship experiences.</p>
                                <div className="split underline">
                                    <div style={{flex: "50%", alignSelf:"center"}}>
                                        <img src={ecsite} style={{width: "80%"}} alt="company logo"/>
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
                                        <img src={keeperhr} style={{width: "80%", borderRadius: "50%"}} alt="company logo"/>
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
                                            application from the gound up. This meant that I was able to "wear many hats" as I was the QA engineer and a frontend developer.
                                            As such, I created of several front-end components as well as writing unit tests for every other component
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
                                        <img src={launch} style={{width: "80%"}} alt="company logo"/>
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
                        <Element name="content4" style={{height: 2626}} className="element">
                            <div className="container">
                                <h3>As a Learner...</h3>
                                <section>
                                    <h4>Self-learnings</h4>
                                    <p>
                                        I am constantly trying to acquire more knowledge about many topics in the vast field of
                                        Computer Engineering. Whether it is inside a lecture hall or educating myself through google,
                                        I am curious about the intersection between hardware and software. To keep myself motivated,
                                        I try to teach myself something new on top of the learnings I acquire through coursework.
                                    </p>
                                    <h5>Current Topic: </h5>
                                    <blockquote>
                                        <a href="https://dronelife.com/2020/03/13/the-newest-advance-in-3d-modeling-videogrammetry/#:~:text=The%20rise%20of%20videogrammetry%20is,and%20lowering%20barriers%20to%20adoption.&text=More%20recently%2C%20photogrammetry%20(a%20term,process%20images%20captured%20from%20drones." target="_blank" rel="noreferrer">Videogrammetry</a>
                                    </blockquote>
                                </section>
                                <section>
                                    <h5>Currently Enrolled Classes</h5>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="customized table">
                                            <TableHead>
                                            <TableRow>
                                                <StyledTableCell><h4 className="table">Course Name</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Course ID</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Description</h4></StyledTableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {currRows.map((row) => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <h5 className="table">{row.name}</h5>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">{row.id}</StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.description}</h5></StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </section>
                                <br />
                                <section>
                                    <h5>Computer Science Classes</h5>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="customized table">
                                            <TableHead>
                                            <TableRow>
                                                <StyledTableCell><h4 className="table">Course Name</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Course ID</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Time Taken</h4></StyledTableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {pastCSRows.map((row) => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <h5 className="table">{row.name}</h5>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left">{row.id}</StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.date}</h5></StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </section>
                                <br />
                                <section>
                                    <h5>Math Classes</h5>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="customized table">
                                            <TableHead>
                                            <TableRow>
                                                <StyledTableCell><h4 className="table">Course Name</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Course ID</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Description</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Time Taken</h4></StyledTableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {pastMRows.map((row) => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <h5 className="table">{row.name}</h5>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.id}</h5></StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.description}</h5></StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.date}</h5></StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </section>
                                <br />
                                <section>
                                    <h5>Other STEM Classes</h5>
                                    <TableContainer component={Paper}>
                                        <Table aria-label="customized table">
                                            <TableHead>
                                            <TableRow>
                                                <StyledTableCell><h4 className="table">Course Name</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Course ID</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Description</h4></StyledTableCell>
                                                <StyledTableCell align="left"><h4 className="table">Time Taken</h4></StyledTableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {pastERows.map((row) => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row">
                                                        <h5 className="table">{row.name}</h5>
                                                    </StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.id}</h5></StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.description}</h5></StyledTableCell>
                                                    <StyledTableCell align="left"><h5 className="table">{row.date}</h5></StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </section>
                            </div>
                        </Element>
                        <Element name="content5" style={{height: 3215}} className="element">
                            <div className="container">
                                <h3>Research</h3>
                                <p>Here is a brief summary of the research I am currently doing or have previously done at UW. Please feel free to reach out to me if you
                                    are curious about my research experiences.</p>
                                <div className="split underline">
                                    <div style={{flex: "50%", alignSelf:"center"}}>
                                        <img src={seal} style={{width: "80%"}} alt="lab logo"/>
                                    </div>
                                    <div style={{flex: "50%"}}>
                                        <header>
                                            <h4>SEAL</h4>
                                            <p>
                                                December 2020 - Present | Undergraduate Researcher
                                            </p>
                                        </header>
                                        <p>
                                            <b>What is SEAL?</b><br />
                                            <a href="https://uwseal.org/" target="_blank" rel="noreferrer"> SEAL</a>, the Sensors, Energy, and Automation Laboratory at the
                                            University of Washington, is a lab focused on projects relating to sensors and sensor array design using electric, magnetic, acoustic, and thermal fields.
                                            In addition, SEAL focuses on developing new products for medical and green energy applications that utilize this expertise in sensors. The lab performs R{'&'}D 
                                            and P{'&'}D by working in collaboration with the NIH, the NSF and other research organizations introducing cutting edge technology to the market.
                                        </p>
                                        <p>
                                            <b>What do I do?</b><br />
                                            Currently, I am working on a project to enable higher quality stoma care at a lower cost for people with intestinal or urinary diversion. In particular
                                            we are aiming to provide a better, more accessable method to post-operative wafer fitting. To do this, we will develop and test an electronic imaging system
                                            for hospital and home use for better preparation, application, and monitoring of stoma wafers, as well as for creating images of the stoma and peristomal area
                                            for further analysis. The introduction of our system, the Stoma-Wafer Inspection and Fit Tool (SWIFT), into modern healthcare will improve the quality of life,
                                            mobility, independence, mood, self-confidence, and the overall health of ostomates.
                                        </p>
                                    </div>
                                </div>
                                <div className="split underline">
                                    <div style={{flex: "50%", alignSelf:"center"}}>
                                        <img src={ecocar} style={{width: "80%"}} alt="company logo"/>
                                    </div>
                                    <div style={{flex: "50%"}}>
                                        <header>
                                            <h4>EcoCAR</h4>
                                            <p>
                                                September 2019 - Present | PCM Researcher
                                            </p>
                                        </header>
                                        <p>
                                            <b>What is EcoCAR?</b><br />
                                            <a href="https://green.uw.edu/promote/snapshots/uw-ecocar" target="_blank" rel="noreferrer"> EcoCar</a> is a club at the University of Washington that
                                            competes in the <a href="https://avtcseries.org/ecocar-mobility-challenge/" target="_blank" rel="noreferrer"> EcoCar Mobility Challenge</a>.
                                            The competition is sponsored by the U.S. Department of Energy, General Motors, MathWorks, and is managed by Argonne National Laboratory. Teams are
                                            challenged to redesign a 2019 Chevrolet Blazer in order to reduce energy consumption and emissions, as well as apply SAE Level 2 automation. This
                                            is done by implementing advanced propulsion systems, electrification, and vehicle connectivity, all while balancing factors such as emissions, safety,
                                            utility, and consumer acceptability.
                                        </p>
                                        <p>
                                            <b>What do I do?</b><br />
                                            Currently, as a researcher in the Propulsion Controls and Modeling (PCM) team, I am working on developing a machine learning model that will be able to
                                            add Adaptive Cruise Control (ACC) to the car. This means that the car must be able to stay within its lane and keep a set distance between the car and a
                                            car in front of it. To do this, I am researching various ACC algorithms and figuring out which control algorithm would best fit our car's needs.
                                            Furthermore, I am also developing a video processesing algorithm to figure out the distance between the leading car and our car. Then, after applying Baynesian
                                            and Kalman filter techniques to incorporate the radar data, we will be able to get an accurate reading of the distance.
                                        </p>
                                    </div>
                                </div>
                                <div className="split">
                                    <div style={{flex: "50%", alignSelf:"center"}}>
                                        <img src={afsl} style={{width: "80%"}} alt="company logo"/>
                                    </div>
                                    <div style={{flex: "50%"}}>
                                        <header>
                                            <h4>AFSL</h4>
                                            <p>
                                                June 2018 - August 2018 | Researcher Intern (High School)
                                            </p>
                                        </header>
                                        <p>
                                            <b>What is AFSL?</b><br />
                                            <a href="https://www.aa.washington.edu/afsl" target="_blank" rel="noreferrer"> AFSL</a>, the Autonomous Flight Systems Laboratory,
                                            is a lab at the University of Washington that develops technology relevant to unmanned systems. Investigations consist of applying
                                            advanced avionics, sensors, and other payloads to various platforms including off-the-shelf fixed wing and multi-rotor unmanned aerial
                                            systems as well as customized platforms. A parallel objective is to integrate this technology into the flight mechanics and controls
                                            courses in the Department of Aeronautics and Astronautics to provide students experience with realistic GNC systems.
                                        </p>
                                        <p>
                                            <b>What did I do?</b><br />
                                            As my first research opportunity, I was tasked with creating a management solution to keep track of all of the flight data such that
                                            it could be analyzed with a click of a button. This was important because in the past, all of the data was kept in unmanaged Excel
                                            spreadsheets, which were thousands of rows long. Additionally, I was also on the team that was developing software to allow a drone
                                            to be able to switch from vertical to horizontal flight in mid-air, allowing the drone to perform more complex maneuvers. This included
                                            programming on a Raspberry Pi to control the hardware based on sensor inputs.  
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Element>
                        <Element name="content6" style={{height: 714}} className="element">
                            <div className="container">
                                <h3>Connect With Me!</h3>
                                <p>
                                    Click on the icons to get redirected to my other pages!
                                </p>
                                <div className="split">
                                    <div style={{display: "flex", flexWrap: "wrap", margin:"auto", justifyContent: "center"}}>
                                        <a href="https://www.linkedin.com/in/sidharth-lakshmanan-30527a168/" target="_blank" rel="noreferrer"  style={{marginRight: "1em"}}>
                                            <Avatar style={{ background: '#4F90CD' }}>
                                                <LinkedInIcon/>
                                            </Avatar>
                                        </a>
                                        <a href="https://github.com/s-lakshmanansi" target="_blank" rel="noreferrer" style={{marginRight: "1em"}}>
                                            <Avatar style={{ background: '#4F90CD' }}>
                                                <GitHubIcon/>
                                            </Avatar>
                                        </a>
                                        <a href="mailto:sidlak@uw.edu" target="_blank" rel="noreferrer">
                                            <Avatar style={{ background: '#4F90CD' }}>
                                                <MailIcon/>
                                            </Avatar>
                                        </a>
                                    </div>
                                </div>
                                <br />
                                <h5>Send me an Email!</h5>
                                { !this.state.submitted ?
                                    <div className="split">
                                        <div style={{display: "flex", flexWrap: "wrap", margin:"auto", justifyContent: "center"}}>
                                            <form autoComplete="off" noValidate>
                                                <TextField name="name" id="name" variant="outlined" label="Your Name" onChange={this.handleChange} style={{width:"350px", margin:"10px", marginRight:"20px"}}/>
                                                <TextField name="email" id="email" variant="outlined" label="Your Email" onChange={this.handleChange} style={{width:"350px", margin:"10px", marginLeft:"20px"}}/>
                                            </form>
                                            <form autoComplete="off" noValidate>
                                                <TextField name="subject" id="subject" variant="outlined" label="Subject" onChange={this.handleChange} style={{width:"740px", margin:"10px"}}/>
                                            </form>
                                            <form autoComplete="off" noValidate>
                                                <TextField name="message" id="message" variant="outlined" label="Message" multiline rows={8} onChange={this.handleChange} style={{width:"740px", margin:"10px"}}/>
                                            </form>
                                            <form>
                                                {this.state.error !== "" &&
                                                    <div style={{width:"740px", margin:"10px"}}>
                                                       <h5 style={{color: "red"}}> {this.state.error} </h5> 
                                                    </div>
                                                }
                                            </form> 
                                            <br />
                                            {this.validate() ?
                                                <Button
                                                    variant="contained"
                                                    style={styleButton}
                                                    onClick={this.submit}
                                                >
                                                    Send Message
                                                </Button>
                                                :
                                                <Button
                                                    variant="contained"
                                                    style={styleButtonDis}
                                                    disabled
                                                    onClick={this.submit}
                                                >
                                                    Send Message
                                                </Button>
                                            }
                                                        
                                        </div>   
                                    </div>
                                :
                                <div>
                                    <p> Thanks! I will try to respond as soon as possible! </p>
                                </div>
                                }
                            </div>
                        </Element>
                        <div className="spacer">
                            <div className="container">
                                <p>&copy; Sidharth Lakshmanan. All rights reserved. Last Updated: 1/4/2021</p>
                            </div>
                        </div>
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
                                <Link className="button" activeClass="active" to="content1" spy={true} offset={0} smooth={true} duration={700} delay={50} isDynamic={true}><a className="a" href="#1">About</a></Link>
                                <Link className="button" activeClass="active" to="content2" spy={true} offset={0} smooth={true} duration={700} delay={50} isDynamic={true}><a className="a" href="#2">Tech Skills</a></Link>
                                <Link className="button" activeClass="active" to="content3" spy={true} offset={0} smooth={true} duration={700} delay={50} isDynamic={true}><a className="a" href="#3">Work Experiences</a></Link>
                                <Link className="button" activeClass="active" to="content4" spy={true} offset={0} smooth={true} duration={700} delay={50} isDynamic={true}><a className="a" href="#4">Student Life</a></Link>
                                <Link className="button" activeClass="active" to="content5" spy={true} offset={0} smooth={true} duration={700} delay={50} isDynamic={true}><a className="a" href="#5">Research</a></Link>
                                <Link className="button" activeClass="active" to="content6" spy={true} offset={0} smooth={true} duration={700} delay={50} isDynamic={true}><a className="a" href="#6">Contact Me!</a></Link>
                        </div>
                        <div className="extra"></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (!isMobileOnly) {
            return this.renderWeb();
        } else {
            return (<h5>Mobile view has not been created yet</h5>);
        }
    }
}

export default MainPage;
