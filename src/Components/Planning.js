import React from 'react'
import { Table } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';
import fondTapis from '../Images/fondTapis2.jpg'

const Planning = () => (
  <div>
  
  <div className="planning">
  <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Background src="/../Images/fondTapis2.jpg" />
        <h2 className="my-5">Planning</h2> 
  </Parallax>  
<h2 className="p-5">Planning</h2> 

  <Table striped bordered hover className="text-center">
  <thead>
    <tr>
      <th>Horaires</th>
      <th>Lundi</th>
      <th>Mardi</th>
      <th>Mercredi</th>
      <th>Jeudi</th>
      <th>Vendredi</th>
      <th>Samedi</th>
      <th>Dimanche</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>9-10h</td>
      <td>Hatha</td>
      <td>-</td>
      <td>Vinyasa</td>
      <td>Ashtanga</td>
      <td>Hatha</td>
      <td>Hatha</td>
    </tr>
    <tr>
      <td>10-11h30</td>
      <td>-</td>
      <td>Hatha</td>
      <td>Bikram</td>
      <td>Vinyasa</td>
      <td>-</td>
      <td>Kundalini</td>
    </tr>
    <tr>
      <td>12-13h</td>
      <td>Vinyasa</td>
      <td>Hatha</td>
      <td>Iyengar</td>
      <td>-</td>
      <td>Bikram</td>
      <td>Ashtanga</td>
      <td>Fermé</td>
    </tr>
    <tr>
      <td>16-17h</td>
      <td>Hatha</td>
      <td>-</td>
      <td>Bikram</td>
      <td>Vinyasa</td>
      <td>Bikram</td>
      <td>Kundalini</td>
    </tr>
    <tr>
      <td>19-20h</td>
      <td>-</td>
      <td>Bikram</td>
      <td>Iyengar</td>
      <td>Vinyasa</td>
      <td>Bikram</td>
      <td>Ashtanga</td>
    </tr>
    <tr>
      <td>20-21h30</td>
      <td>Bikram</td>
      <td>Kundalini</td>
      <td>Bikram</td>
      <td>Ashtanga</td>
      <td>-</td>
      <td>Hatha</td>
    </tr>
  </tbody>
</Table>
</div>
</div>
)

export default Planning;