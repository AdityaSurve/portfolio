import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import solarProj from "../assets/img/solarSystem.png";
import omniFood from "../assets/img/omnifood.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects=()=>{
    const Webprojects=[
        {
            title: "ZeroWaste Kitchen",
            description: "React, Firebase, JavaScript, Bootstrap",
            imgUrl: "https://assets.devfolio.co/hackathons/9324c4ecbccb4894948be8d315ff1963/projects/9f05353a505c40ecbb552ae4b15b3b6a/59f1e7aa-41a4-4246-ae73-3d65e603d30d.jpeg",
        },
        {
            title: "DisFolio",
            description: "React, Firebase, JavaScript, Bootstrap",
            imgUrl: "https://assets.devfolio.co/hackathons/eda96647411d41d1ace174f48f1224e6/projects/9f05353a505c40ecbb552ae4b15b3b6a/df82ec80-458d-4d44-bc6d-72df9bec901e.jpeg",
        },
        {
            title: "Solar System",
            description: "HTML, CSS, JavaScript",
            imgUrl: solarProj,
        },
        {
            title: "OmniFood",
            description: "HTML, CSS, JavaScript",
            imgUrl: omniFood,
        },
    ]    
    const AppProjects=[
        {
            title: "ShinkApp",
            description: "Java, XML",
            imgUrl: "https://assets.devfolio.co/hackathons/9324c4ecbccb4894948be8d315ff1963/projects/9f05353a505c40ecbb552ae4b15b3b6a/59f1e7aa-41a4-4246-ae73-3d65e603d30d.jpeg",
        },
    ]
    const AIMLProjects=[
        {
            title: "Image Recognition",
            description: "Python, CNN, Cifar 10 Dataset",
            imgUrl: "https://en.sepoin.com/wp-content/uploads/2020/01/AI-ML-4.jpg",
        },
        {
            title: "Movie Recommendation",
            description: "Python, NLP",
            imgUrl: "https://devsdata.com/wp-content/uploads/2020/01/107_agfuzc1tyxpllu5muc1kyxjrlwjsdwu-scaled.jpg",
        },
        {
            title: "Sentiment Analysis",
            description: "Python, NLP",
            imgUrl: "https://th.bing.com/th/id/OIP.wol5UivocjrFsmBgORhtIAHaEK?pid=ImgDet&rs=1",
        },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                        <Nav.Link eventKey="webTab">Web Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="appTab">App Development</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="aimlTab">AI / ML</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="webTab">
                                            <Row>
                                                {
                                                Webprojects.map((project, index) => {
                                                    return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="appTab">
                                            <Row>
                                                {
                                                AppProjects.map((project, index) => {
                                                    return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="aimlTab">
                                            <Row>
                                                {
                                                AIMLProjects.map((project, index) => {
                                                    return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                        />
                                                    )
                                                })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}