import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Price = () => (
  <div>
    <div className="fond">
<Container className=" px-5 py-5">
  <p className=" title1 text-center">Tarifs</p>
  <Row  className="parag my-5 px-5 text-center ">
    <Col>
      <h2>Cours d'essai</h2>
      <p>Choisissez la séance et l'horaire qui vous correspondent après avoir consulté le planning en ligne.
      Si vous avez des problèmes de dos, débutez de préference par le yoga hatha qui est un yoga doux.
      Le Yoga Vinyasa convient aux sportifs ou aux personnes ayant une bonne condition physique.
      </p>
    </Col>
  </Row>
    <Row  className="parag my-5 px-5 text-center">
    <Col> <h2>Cours à l'unité</h2>  
    <p>- Cours d'essai (1h ou 1h30)  .................... 15 $ </p>
    <p>- Cours à l'unité 1h          .................... 20 $ </p>
    <p>- Cours à l'unité 1h30        .................... 25 $ </p>
    </Col>
  
  </Row>
 
  <Row className="parag my-5 px-5 text-center " >
    <Col> <h2>Forfaits</h2>
    <p>- Forfait 10h .................... 160 $ </p>
    <p>- Forfait 30h .................... 450 $ </p>
    </Col>
  </Row>
  <Row  className="parag my-5 px-5 text-center">
    <Col> <h2>Conditions Générales de vente</h2>
    <p>Les forfaits sont nominatifs et ne peuvent être utilisés que par une seule personne.
      Ils démarrent le jour du premier cours utilisé et peuvent commencer et se finir n'importe quel jour de la semaine, à toute période de l'année.
      Les cours payés à l’heure sont valables un an de date à date.
      Les forfaits 10h sont valables 1 an.
      Les forfaits 30h sont valables 18 mois.
      Merci de noter que:
      Les cours et forfaits ne sont EN AUCUN CAS remboursables ou échangeables.
   ​   Les cours se feront uniquement sur réservation.
      Les annulations seront possibles jusqu'à 2 heures avant le début du cours; au-delà de ce délai, l'heure sera comptabilisée pour les élèves ayant un forfait.
      Aucune prolongation ni suspension de forfait ne sera accordée (sauf problème de santé, sur acceptation du secrétariat et après présentation d'un certificat médical du médecin traitant portant la mention "inapte à la pratique du yoga" uniquement).​
      </p>
      </Col>
  </Row> 

</Container>
    </div>
  </div>
)

export default Price;

