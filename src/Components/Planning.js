import React from 'react'
import { Table } from 'react-bootstrap';
import { Parallax, Background } from 'react-parallax';

const Planning = () => (
 
  <div className="planning">
    <h2 className="p-5">Planning</h2>  
    <div>
        <Parallax className="p-5"
            blur={{ min: -5, max: 15 }}
            bgImage={require('../Images/fondTapis1.jpg')}
            bgImageAlt="tapis de yoga"
            strength={400}
        >
              <Table striped bordered hover responsive className="text-center">
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
            <div style={{ height: '30vh' }} />
        </Parallax>
  </div> 
</div>
)

export default Planning;