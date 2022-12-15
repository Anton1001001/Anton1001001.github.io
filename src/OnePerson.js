import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import Carousel from 'carousel-react-rcdev'

import WritersInfo from './WritersInfo';

import {useParams, Link} from "react-router-dom";



function OnePerson(){
    const params = useParams();
    const id = params.number;

    const writer = WritersInfo.writer.find(w=>w.number == id);
    const wrInfo = WritersInfo.wrInfo.find(w=>w.number == id);

    return(
        <div>
            <div className="">
                <img alt="" src={require(`./img/${writer.fileName}/por.jpg`)} height="400" width=""/>
                <div className="">
                <h1>{writer.name}</h1>
                <h2>{wrInfo.birthDate} - {wrInfo.deathDate}</h2>
                <div className="">
                    <p>{wrInfo.shortInfo}</p>
                </div>  
                </div>
            </div>    

            <Timeline lineColor={'#ddd'}>
                {
                    wrInfo.events.map(w =>(
                        <TimelineItem
                        style = {{color: '#e86971'}}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                        dateText = {w.year}>
                            <p>p.description</p>
                        </TimelineItem>   
                    ))
                }       
            </Timeline>

            <Carousel>
            {
                phtData.gallery.map(w => (
                <Carousel.Item className="">
                    <img src={require(`./img/${writer.fileName}/${w}`)} alt=""/>
                </Carousel.Item>
                ))
            }    
            </Carousel>


            <div className="">
                <div className="">
                    <iframe className="" src={phtData.videoLink} frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div>
                    <iframe src={phtData.maplink} className=""
                        allowfullscreen="" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
        </div>
    );
}