import React from 'react'
import { Container, Col, Card, CardDeck} from 'react-bootstrap'; 
import hatha from '../Images/hatha.jpg'
import bikram from '../Images/bikram.png'
import kundalini from '../Images/kundalini.png'
import iyengar from '../Images/iyengar.png'

const YogaDoux = () => (
  <p>
      <h2>Yoga Doux</h2>
  
    <Container className="vignettes" fluid >
        <CardDeck>

<Col xs={12} md={6} className="mb-3">
<Card>
  <Card.Img variant="top" src={kundalini}/>
  <Card.Body>
    <Card.Title>Kundalini</Card.Title>
    <Card.Text>
    Si vous cherchez une pratique plus spirituelle et basée sur l'énergie, essayez le kundalini, fondé par le yogi Bhajan. Le kundalini est composé de kriyas, des exercices répétitifs combinés à une respiration intense (comme si vous respiriez du feu); cette pratique peut être exigeante et énergisante sur le plan physique. Grâce à des mouvements, à votre respiration et à des sons (psalmodie), vous commencerez à stimuler et à relâcher de l'énergie non exploitée au niveau de votre colonne vertébrale et par l'entremise de vos centres d'énergie, aussi appelés chakras. La durée des classes est habituellement d'une heure ou plus.
    </Card.Text>
  </Card.Body>
 </Card>
</Col>

<Col xs={12} md={6} className="mb-3">
<Card>
  <Card.Img variant="top" src={bikram}/>
  <Card.Body>
    <Card.Title>Bikram</Card.Title>
    <Card.Text>
    Lorsque vous entrez dans un studio de yoga bikram, la première chose que vous remarquerez est la chaleur. Chaque studio est chauffé à environ 105 degrés (°F) et présente un taux d'humidité de 40 pour cent. Durant le cours de 90 minutes, vous pratiquerez un ensemble de 26 poses, comme la pose du bâton en équilibre et celle de la sauterelle, ainsi que deux exercices de respiration qui, selon le fondateur Bikram Choudhury, permettent de faire systématiquement circuler le sang oxygéné dans le corps.
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col xs={12} md={6} className="mb-3">
<Card>
  <Card.Img variant="top" src={iyengar}/>
  <Card.Body>
    <Card.Title>Iyengar</Card.Title>
    <Card.Text>
    Le yoga Iyengar a pour objectif de porter une attention précise à notre alignement durant chaque posture. Vous utiliserez une variété d'accessoires tels que des blocs, des couvertures, des sangles, des chaises pliantes et même des murs de cordes afin de trouver le bon alignement pour chaque position. Plutôt que de passer d'une pose à l'autre rapidement, vous devrez tenir chaque posture pour une plus longue période. Les cours durent habituellement une heure et demie. Le yoga Iyengar peut être thérapeutique pour les gens qui récupèrent de certaines blessures.
    </Card.Text>
  </Card.Body>
</Card>
</Col>

<Col xs={12} md={6} className="mb-3">
<Card>
  <Card.Img variant="top" src={hatha}/>
  <Card.Body>
    <Card.Title>Hatha</Card.Title>
    <Card.Text>
   Yoga doux qui consiste à conserver longtemps chaque posture et donc à solliciter les muscles et la concentration en profondeur. On enchaîne les postures les unes après les autres, sans réaliser de transitions particulières entre chaque posture.
    </Card.Text>
  </Card.Body>
</Card>
</Col>


</CardDeck>
</Container> 
</p>

)

export default YogaDoux;