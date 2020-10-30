import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Image1 from './Images/tapisMain.jpg'
import hatha from './Images/hatha.jpg'
import ashtanga from './Images/ashtanga.png'
import Lessons from './Components/Lessons'
import YogaDoux from './Components/YogaDoux'
import YogaDyn from './Components/YogaDyn'
import Planning from './Components/Planning'
import Team from './Components/Team'
import Price from './Components/Price'
import { Image, Container, Row, Col, Card} from 'react-bootstrap';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Toggle from './Components/Toggle';

const Home = () => (
  <div className="App">
     <div>
      <Container className="MainImage" fluid>
      <Row>
       <Col xs={12}>
      <Image src={Image1} rounded fluid />
      </Col>
      </Row>
      </Container>
     </div>

     <div className="BarreStyle"></div> 
    <div className="Presentation"></div>

    <Container className="SecondaryImages" fluid>
      <Row>
    <Col xs={12} md={6}>
<Card >
  <Card.Img variant="top" src={ashtanga} />
  <Card.Body>
    <Card.Title>Ashtanga</Card.Title>
    <Card.Text> L'Ashtanga est un yoga dynamique qui nécessite une bonne forme physique.
    </Card.Text>
  </Card.Body>
 
  <Card.Body>
    <Card.Link className="lien" href="/Components/YogaDyn">Yoga Dynamique</Card.Link>
  </Card.Body>
</Card>
</Col>
<Col xs={12} md={6}>
<Card >
  <Card.Img variant="top" src={hatha}/>
  <Card.Body>
    <Card.Title>Hatha</Card.Title>
    <Card.Text> Le Hatha est un yoga doux indiqué pour les débutants.
    </Card.Text>
  </Card.Body>
 
  <Card.Body>
    <Card.Link className="lien" href="/Components/YogaDoux">Yoga Doux</Card.Link>
  </Card.Body>
</Card>
</Col>
</Row>
    </Container>

   </div>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Components/Lessons" component={Lessons}></Route>
          <Route exact path="/Components/Toggle" component={Toggle}></Route>
          <Route exact path="/Components/YogaDoux" component={YogaDoux}></Route>
          <Route exact path="/Components/YogaDyn" component={YogaDyn}></Route>
          <Route exact path="/Components/Planning" component={Planning}></Route>
          <Route exact path="/Components/Team" component={Team}></Route>
          <Route exact path="/Components/Price" component={Price}></Route>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
  
}


export default App;
