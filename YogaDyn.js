import React from 'react'
import { Container, Col, Card, CardDeck, Button} from 'react-bootstrap'; 

import ashtanga from '../Images/ashtanga.png'
import vinyasa from '../Images/vinyasa.png'

const YogaDyn = () => (
    <p>
        <h2>Yoga Dynamique</h2>
    
      <Container className="vignettes" fluid >
          <CardDeck>

<Col xs={12} md={6}>
<Card >
  <Card.Img variant="top" src={ashtanga}/>
  <Card.Body>
    <Card.Title>Ashtanga</Card.Title>
    <Card.Text>
      Yoga dynamique et très codifié.
      En Asthanga on pratique des séries contenant un certain nombre de postures différentes.
      Dans les cours d’Ashtanga, c’est cardio et il n’est pas rare de transpirer !
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col xs={12} md={6}>
<Card >
  <Card.Img variant="top" src={vinyasa}/>
  <Card.Body>
    <Card.Title>Vinyasa</Card.Title>
    <Card.Text>
    le Vinyasa est proche de l’Ashtanga, mais il offre une plus grande liberté dans l’enchaînement des postures. De plus, chaque posture est suivie d’un vinyasa, c’est-à-dire un enchaînement de postures précis, qui relie chaque posture.
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</CardDeck>
</Container> 
</p>

)

export default YogaDyn;