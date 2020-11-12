import React, { useState } from 'react'  
import '../App.css';
import {Jumbotron, ButtonGroup, Button, Row, Col, Container} from 'react-bootstrap';
import YogaDoux from './YogaDoux.js'
import YogaDyn from './YogaDyn.js'
import Lessons from './Lessons.js'

const Toggle = () => {
const yogas = ["Ensemble des cours","Yoga Doux", "Yoga Dynamique"];
const [myYoga, setMyYoga] = useState ('')

  return (
    <Container fluid >
      <Row>
        <Col className="text-center group">
          <Jumbotron style={{backgroundColor : "rgb(192, 217, 194)"}}>
          <ButtonGroup aria-label="groupe de boutons" size="lg" className="cours" 
          >
                {yogas.map(yoga => (
                  <Button variant="secondary" 
                  style={{margin : "10px", padding : "15px"}}
                  key={yoga}
                  onClick={()=> setMyYoga(yoga)}
                  >
                    {yoga}
                  </Button>
                ))}
          </ButtonGroup>
          </Jumbotron>
            <div className="text-center" >
              <p>{myYoga === "Ensemble des cours" && <Lessons/>}</p>
              <p>{myYoga === "Yoga Doux" && <YogaDoux/>}</p>
              <p>{myYoga === "Yoga Dynamique" && <YogaDyn/>}</p>
            </div>
      
        </Col>
      </Row>
    </Container>
  )
}
export default Toggle;