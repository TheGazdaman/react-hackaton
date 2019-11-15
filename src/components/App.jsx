import React, { useState, useEffect } from "react";
import { DateTime } from 'luxon';
import FlyFromButton from './FlyFromButton.jsx';
import FlyToButton from './FlyToButton.jsx';


const App = props => {

    const [outputValues, setOutputValues] = useState([]);
    const [flyFrom, setFlyFrom] = useState('');
    const [flyTo, setFlyTo] = useState('');
    const [loading, setLoading] = useState(true);
    const [checked, setChecked] = useState(false);
    const [maxStopovers, setMaxStopovers] = useState(10);

    let URL = `https://api.skypicker.com/flights?&fly_from=${flyFrom}&fly_to=${flyTo}&partner=picky&limit=10&max_stopovers=${maxStopovers}`;

     const changeFlyFrom = (flyFrom) => {

        setLoading(false)
        setFlyFrom(flyFrom)

    }

    const changeFlyTo= (flyTo) => {

        setLoading(false)
        setFlyTo(flyTo)

    }

    const changeChecked = () => {

        setChecked(!checked)
        

        if (checked){
            setMaxStopovers(10)
        }
        else
        {
            setMaxStopovers(0)

        } 

    }

    console.log(maxStopovers);
    


    
    const callApi = (url) => {


        useEffect(() => {
            fetch(url)
            .then(response => response.json())
            .then(data => {


                setLoading(true)
                
                setOutputValues(data.data)
            })
        },[flyFrom, flyTo])
    
    }


    callApi(URL);

    if (loading && !outputValues.length)
    {

        return (

            <div>
                <h1>Fly happy!</h1> 
                <h1>Pick a flight!</h1> 

                <div className="selection">
                    <div><FlyFromButton key={flyFrom} changeFlyFrom={changeFlyFrom} /></div>
                    <div><FlyToButton key={flyTo} changeFlyTo={changeFlyTo}/></div>

                    <label htmlFor="checkbox">Only direct flights</label>
                    <input
                        id="checkbox"
                        type="checkbox"
                        checked={checked}
                        onChange={changeChecked}
                    />
                </div>
            </div>

        );
    }
    else if (!loading) {

        return (

            <div>
                    <h1>Fly happy!</h1> 

                    <h1>Loading!</h1> 

                    <div className="selection">
                        <div><FlyFromButton key={flyFrom} changeFlyFrom={changeFlyFrom} /></div>
                        <div><FlyToButton key={flyTo} changeFlyTo={changeFlyTo}/></div>
                        <label htmlFor="checkbox">Only direct flights</label>
                            <input
                                id="checkbox"
                                type="checkbox"
                                checked={checked}
                                onChange={changeChecked}
                            />
                    </div>

                </div>
        );



    }
    else{

        return (
        <div>
            <h1>Fly happy!</h1>
            <div className="selection">
                <div><FlyFromButton key={flyFrom} changeFlyFrom={changeFlyFrom} /></div>
                <div><FlyToButton key={flyTo} changeFlyTo={changeFlyTo}/></div>
                </div>

                 <label htmlFor="checkbox">Only direct flights</label>
                        <input
                            id="checkbox"
                            type="checkbox"
                            checked={checked}
                            onChange={changeChecked}
                        /> 
            {outputValues.map((flightData) => {
                return (
                    <>
                    
                    
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
            })}      
        </div>
    );

    }

};

export default App;