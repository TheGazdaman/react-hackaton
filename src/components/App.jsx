import React, { useState, useEffect } from "react";
import { DateTime } from 'luxon';
import FlyFromButton from './FlyFromButton.jsx';
import FlyToButton from './FlyToButton.jsx';


const App = props => {

    const URL = 'https://api.skypicker.com/flights?&fly_from=PRG&fly_to=VLC&partner=picky&limit=1&max_stopovers=2';


    const [outputValues, setOutputValues] = useState([]);
    const [flyFrom, setFlyFrom] = useState('');
    const [flyTo, setFlyTo] = useState('');

    const callApi = (url) => {


        useEffect(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => {

                console.log('data', data);
                
                setOutputValues(data.data)
            })
        },[])
    
    }

    const selectFrom = () => {
        setFlyFrom()

    }

    const selectTo = () => {
        
    }

    callApi(URL);
    console.log(outputValues.length);

    return (
        <div>
            {outputValues.length ? outputValues.map((flightData) => {
                return (
                    <>
                    {flightData.route.map((route) => {
                        return (
                            <>
                                <p>{route.flyFrom}</p>
                                <p>{route.flyTo}</p>
                                <p>{route.cityFrom}</p>
                                <p>{route.cityTo}</p>
                                <p>{DateTime.fromMillis(route.dTime * 1000).toFormat('yyyy LLLL dd hh:mm')}</p>
                                <p>{DateTime.fromMillis(route.aTime * 1000).toFormat('yyyy LLLL dd hh:mm')}</p>
                                
                            </>
                        )
                    })}
                
                     <p>{flightData.price}</p>
                     <FlyFromButton/>
                     <FlyToButton/>
                     <button
                        
                    >Submit</button>

                    </>
                   
                )
            }) 
        : 'Loading...'}      
        </div>
    );
};

export default App;