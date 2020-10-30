import React, { useState } from 'react'  
import '../App.css';
import {ButtonGroup,Button, Row, Col} from 'react-bootstrap';
import YogaDoux from './YogaDoux.js'
import YogaDyn from './YogaDyn.js'
import Cours from './Lessons.js'

const Toggle = () => {
const yogas = ["Ensemble des cours","Yoga Doux", "Yoga Dynamique"];
const [myYoga, setMyYoga] = useState ('')

return (
<Row>
  <Col className=" col-12 text-center group">
  <ButtonGroup aria-label="groupe de boutons" size="lg">

        {yogas.map(yoga => (
          <Button variant="secondary"
          className="px-5 m-5"
          key={yoga}
          onClick={()=> setMyYoga(yoga)}
          >
            {yoga}
          </Button>
        ))}
    </ButtonGroup>
    <div className="col text-center">
      <p>{myYoga === "Ensemble des cours" && <Cours/>}</p>
      <p>{myYoga === "Yoga Doux" && <YogaDoux/>}</p>
      <p>{myYoga === "Yoga Dynamique" && <YogaDyn/>}</p>
    </div>
  </Col>
</Row>
)}
export default Toggle;