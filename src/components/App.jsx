import React, { useState, useEffect } from "react";
import { DateTime } from 'luxon';
import FlyFromButton from './FlyFromButton.jsx';
import FlyToButton from './FlyToButton.jsx';


const App = props => {

    const [outputValues, setOutputValues] = useState([]);
    const [flyFrom, setFlyFrom] = useState('PRG');
    const [flyTo, setFlyTo] = useState('MXP');

    let URL = `https://api.skypicker.com/flights?&fly_from=${flyFrom}&fly_to=${flyTo}&partner=picky&limit=1&max_stopovers=1`;

     const changeFlyFrom = (flyFrom) => {
        setFlyFrom(flyFrom)

    }

    const changeFlyTo= (flyTo) => {
        setFlyTo(flyTo)

    }
    
    const callApi = (url) => {


        useEffect(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                
                setOutputValues(data.data)
            })
        },[flyFrom, flyTo])
    
    }


    callApi(URL);

    return (
        <div><h1>Fly happy!</h1> 
            {outputValues.length ? outputValues.map((flightData) => {
                return (
                    <>
                    <div className="selection">
                     <div><FlyFromButton key={flyFrom} changeFlyFrom={changeFlyFrom} /></div>
                     <div><FlyToButton key={flyTo} changeFlyTo={changeFlyTo}/></div>
                     </div>
                    {flightData.route.map((route) => {
                        return (
                            <div className="flights">
                                <div className="flight-data">Fly from: {route.flyFrom}</div>
                                <div className="flight-data">{route.cityFrom}</div>
                                <div className="flight-data">Departure: {DateTime.fromMillis(route.dTime * 1000).toFormat('yyyy LLLL dd hh:mma')}</div>
                                <div className="flight-data">Fly to: {route.flyTo}</div>
                                <div className="flight-data">{route.cityTo}</div>
                                <div className="flight-data">Arrival: {DateTime.fromMillis(route.aTime * 1000).toFormat('yyyy LLLL dd hh:mma')}</div>
                                
                            </div>
                        )
                    })}
                
                     <div className="flight-data">Price: {flightData.price} EUR</div>
                    
                     

                    </>
                   
                )
            }) 
        : 'Loading...'}      
        </div>
    );
};

export default App;