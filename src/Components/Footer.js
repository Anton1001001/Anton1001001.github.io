import React from "react";
import {Row, Col, Image} from "react-bootstrap"
import Anton from './dev/Anton1001001Dev.png';
import vashka from './dev/vashkaDev.png';
import Melekit from './dev/Melekit235Dev.png';

const Footer = (props) => {
    
    return (
        
            <Row style ={{backgroundColor: "grey", padding: "10px"}}>
                <Col>
                    <img src={Anton} height={80} style={{display:"block",marginLeft:"auto", marginRight:"auto"}}>
                    </img>
                    <a href="https://github.com/Anton1001001" style={{display:"flex", justifyContent:"center", fontSize:"20px"}}> Anton1001001</a>
                </Col>

                <Col style={{}}>
                    <img src={vashka} height={80} style={{display:"block",marginLeft:"auto", marginRight:"auto"}}></img>
                    <a href="https://github.com/vashka04" style={{display:"flex", justifyContent:"center", fontSize:"20px"}}> vashka04</a>
                </Col>
                    
                <Col>
                    <img src={Melekit} height={80} style={{display:"block",marginLeft:"auto", marginRight:"auto"}}></img>
                    <a href="https://github.com/Melekit235" style={{display:"flex", justifyContent:"center", fontSize:"20px"}}> Melekit235</a>
                </Col>
            </Row>
        
    );
};

export default Footer;
