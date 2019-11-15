import React, { useState, useEffect } from "react";
import { DateTime } from 'luxon';


const URL = 'https://api.skypicker.com/flights?cityFrom=Prague&flyFrom=CZ&cityTo=Berlin&flyTo=GER&partner=picky&limit=1&max_stopovers=0'
const App = props => {


    const [outputValues, setOutputValues] = useState([]);

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

    callApi(URL);
    console.log(outputValues);

    return (
        <div>
            {outputValues.map((flightData) => {
                return (
                    <>
                    {flightData.route.map((route) => {
                        return (
                            <>
                                <p>{route.flyFrom}</p>
                                <p>{route.flyTo}</p>
                                <p>{route.cityFrom}</p>
                                <p>{route.cityTo}</p>
                                <p>{DateTime.fromMillis(route.aTime * 1000).toFormat('yyyy LLLL dd hh:mm')}</p>
                                <p>{DateTime.fromMillis(route.dTime * 1000).toFormat('yyyy LLLL dd hh:mm')}</p>
                            </>
                        )
                    })}
                
                     <p>{flightData.price}</p>
                    </>
                   
                )
            }) 
        }      
        </div>
    );
};

export default App;