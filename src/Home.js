import React from "react";
import Footer from './Components/Footer';
import WritersInfo from "./WritersInfo";
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
//import "./Home.css"

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let dayWr = getRandomInt(1,6);
  const randomPerson = WritersInfo.writer.find(w=>w.number === dayWr);
  const wrtInfo = WritersInfo.wrInfo.find(w=>w.number === dayWr);

export const Home = () => (
    <>
       
            
            <img alt="" src={require(`./img/${randomPerson.fileName}/por.jpg`)} height="400" width="" className="portreit"/> 
            
            <h1>{randomPerson.name}</h1>
            <h2>{wrtInfo.birthDate} - {wrtInfo.deathDate}</h2>
             
            <p>{wrtInfo.shortInfo}</p>
              
            <Button variant="outline-dark" as={Link} to={`/list/${randomPerson.number}`}>l_more</Button>
                 
    <Footer/>
    </>
)




