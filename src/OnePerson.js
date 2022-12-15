import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import WritersInfo from './WritersInfo';


function OnePerson(){
    const params = useParams();
    const id = params.number;

    const writer = WritersInfo.writer.find(p=>p.number == id);
    const wrInfo = WritersInfo.wrInfo.find(p=>p.number == id);

    return(
        <div>
            <div className="Info">
                <img alt="" src={require(`./img/${writer.fileName}/por.jpg`)} height="400" width=""/>
                <div className="Text">
                <h1>{writer.name}</h1>
                <h2>{wrInfo.birthDate} - {wrInfo.deathDate}</h2>
                <div className="shortInfoWrap">
                    <p>{wrInfo.shortInfo}</p>
                </div>  
                </div>
            </div>    

            <Timeline lineColor={'#ddd'}>
                {
                    wrInfo.events.map(p =>(
                        <TimelineItem>
                            <p>p.description</p>
                        </TimelineItem>   
                    ))
                }       
            </Timeline>
        </div>
    );
}