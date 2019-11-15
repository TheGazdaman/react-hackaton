import React, { useState, useEffect } from "react";


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

                    
                    <p>{flightData.price}</p>
                )
            })
        }


                
         
        </div>

        // 'bananas'




    );



};

export default App;