import React, { useEffect, useState } from 'react';
import './css/style.css';
const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('noida');
    useEffect(() => {
        async function fectApi() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={WriteYourAPIKey}`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        };
        fectApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" onChange={(event) => {
                        setSearch(event.target.value);
                    }} value={search} />
                </div>
                    
                {!city ? (
                    <p className="errorMsg">No data found</p>
                ) : (

                    <>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view">{search}</i>
                            </h2>
                            <h1 className="temp">
                                {city.temp}°C
                            </h1>
                            <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp.max}°C</h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </>
                )
                }
            </div>
        </>
    )
}
export default Tempapp;