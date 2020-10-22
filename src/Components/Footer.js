import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap';
import tapis1 from '../Images/tapis1.jpg'
import tapis2 from '../Images/tapis2.jpg'
import tapis3 from '../Images/tapis3.jpg'
import faceBook from '../Images/f_logo_RGB-White_58.png'
import instagram from '../Images/instagram-logo-white.png'


const Footer = () => (

    <div>
     <p className="title2 text-center">Contact</p>
        <Container className="text-center" >
            <Row>
                <Col>
                    <div>
                <Image src={tapis1} rounded className="mx-3 my-3" />
                <div className="contact">
                  <a href="/Footer.js"><Image src={faceBook} width="63 px"></Image></a>
                </div>
                </div>
                </Col>

                <Col>
                <div>
                     <Image src={tapis2} rounded className="mx-3 my-3"/>
                    <div className="adresse">
                        Studio Yoga Time <br></br> Rue Zen - Paris
                    </div> 
                    </div>       
                </Col>

                <Col>
                <div>
                <Image src={tapis3} rounded className="mx-3 my-3"/>
                <div className="contact">
                  <a href="/Footer.js"><Image src={instagram} width="63 px"></Image></a>
                </div>
                </div>
                </Col>

            </Row>
        </Container>

    </div>
)

export default Footer;
