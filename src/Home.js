import React from "react";
import Footer from './Components/Footer';
import WritersInfo from "./WritersInfo";
import {Button, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./Home.css"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let dayWr = getRandomInt(1,6);
  const randomPerson = WritersInfo.writer.find(w=>w.number === dayWr);
  const wrtInfo = WritersInfo.wrInfo.find(w=>w.number === dayWr);

export const Home = () => (
    <>
    <div className="body">
         
      <div>
        <Row>  
          <p className="personOfDay">Деятель дня</p>  
        </Row>
      </div>

      <Row>
        <Col>   
          <img alt="" src={require(`./img/${randomPerson.fileName}/por.jpg`)} height="500" width="" className="portreit"/> 
        </Col>

        <Col>
            <div className="text1">      
              <h1 className="name">{randomPerson.name}</h1>
              <h2 className="date">{wrtInfo.birthDate} - {wrtInfo.deathDate}</h2>
            </div>       
              
            <p className="text2">{wrtInfo.shortInfo}</p>
            
            <Button variant="outline-dark" as={Link} to={`/OnePerson/${randomPerson.number}`}>look_more</Button>
        </Col> 
      </Row>     
     
    </div>             
    <Footer/>
    </>
)




