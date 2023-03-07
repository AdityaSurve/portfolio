import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Row,Col } from "react-bootstrap";
import reactIcon from "../assets/img/react.png";
import htmlIcon from "../assets/img/html.png";
import cssIcon from "../assets/img/css.png";
import javascriptIcon from "../assets/img/javascript.png";
import bootstrapIcon from "../assets/img/bootstrap.png";
import javaIcon from "../assets/img/java.png";
import kotlinIcon from "../assets/img/kotlin.png";
import xmlIcon from "../assets/img/xml.png";
import pythonIcon from "../assets/img/python.png";
import AIIcon from "../assets/img/artificial-intelligence.png";
import MLIcon from "../assets/img/coding.png";
import colorSharp from "../assets/img/color-sharp.png";
export const Skills=()=>{
    const responsive = {
        superLargeDesktop:{
            breakpoint:{max:4000,min:3000},
            items:5
        },
        desktop:{
            breakpoint:{max:3000,min:1024},
            items:3
        },
        tablet:{
            breakpoint:{max:1024,min:464},
            items:2
        },
        mobile:{
            breakpoint:{max:464,min:0},
            items:1
        }
    }
    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Languages / Frameworks / Tools / Technologies</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider mt-5">
                                <div className="item">
                                    <img src={reactIcon} alt="skill-img"/>
                                    <h5 className="mt-2">React</h5>
                                </div>
                                <div className="item">
                                    <img src={htmlIcon} alt="skill-img"/>
                                    <h5 className="mt-2">HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={cssIcon} alt="skill-img"/>
                                    <h5 className="mt-2">CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={javascriptIcon} alt="skill-img"/>
                                    <h5 className="mt-2">JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrapIcon} alt="skill-img"/>
                                    <h5 className="mt-2">Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={javaIcon} alt="skill-img"/>
                                    <h5 className="mt-2">Java</h5>
                                </div>
                                <div className="item">
                                    <img src={kotlinIcon} alt="skill-img"/>
                                    <h5 className="mt-2">Kotlin</h5>
                                </div>
                                <div className="item">
                                    <img src={xmlIcon} alt="skill-img"/>
                                    <h5 className="mt-2">XML</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonIcon} alt="skill-img"/>
                                    <h5 className="mt-2">Python</h5>
                                </div>
                                <div className="item">
                                    <img src={AIIcon} alt="skill-img"/>
                                    <h5 className="mt-2">Artificial Intelligence</h5>
                                </div>
                                <div className="item">
                                    <img src={MLIcon} alt="skill-img"/>
                                    <h5 className="mt-2">Machine Learning</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="backfround-image-left" src={colorSharp} alt="bg"/>
        </section>
    )
}