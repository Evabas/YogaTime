import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap' 
import Portrait1 from '../Images/portrait1.jpg'
import Portrait2 from '../Images/portrait2.jpg'
import Portrait3 from '../Images/portrait3.jpg'
import Portrait4 from '../Images/portrait4.jpg'
import Portrait5 from '../Images/portrait5.jpg'

const Equipe = () => (

<div>
<p className="title2 text-center">Equipe</p>

<Container className="equipe px-5 py-5" >
<Row className="text-center">
    <Col xs={12} md={4} className="box" >
   
      <Image src={Portrait1} rounded  className=" Portrait mr-3 my-3 border border-dark"/>
      <div className="middle text-center">
      <div className="text"><p><b>James<br></br>Vinyasa et Ashtanga</b></p></div>
      </div>
   
    </Col>

    <Col xs={12} md={4} className="box">
    <Image src={Portrait2} rounded  className=" Portrait mr-3 my-3 border border-dark"/>
      <div className="middle text-center">
      <div className="text"><p><b>Lisa<br></br>Hatha</b></p></div>
      </div>
    </Col>

    <Col xs={12} md={4} className="box">
    <Image src={Portrait3} rounded  className=" Portrait mr-3 my-3 border border-dark"/>
      <div className="middle text-center">
      <div className="text"><p><b>Marie<br></br>Kundalini</b></p></div>
      </div>
    </Col>

  </Row>

  <Row className="text-center" >

    <Col  md={6} className="box">
    <Image src={Portrait4} rounded  className=" Portrait mr-3 my-3 border border-dark"/>
      <div className="middle text-center">
      <div className="text"><p><b>John<br></br>Bikram</b></p></div>
      </div>
    </Col>
    
    <Col xs={12} md={4} className="box">
    <Image src={Portrait5} rounded  className=" Portrait mr-3 my-3 border border-dark"/>
      <div className="middle text-center">
      <div className="text"><p><b>Mike<br></br>Iyengar</b></p></div>
      </div>
    </Col>

  </Row>
</Container>

</div>
)

export default Equipe;