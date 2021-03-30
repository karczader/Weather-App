import React from 'react';
import './Result.css'

const Result = props => {

    const {err, date, city, temp, sunrise, sunset, pressure, wind} = props.weather

    let content = null;

    if(!err && city!=''){

        const sunriseTime=new Date(sunrise*1000).toLocaleTimeString()
        const sunsetTime=new Date(sunset*1000).toLocaleTimeString()

        content = (
            <div className="weatherInformation">
                <div><h3>Pogoda dla miasta <em>{city}</em></h3></div>
                <div className="oneInformation">Data: {date}</div>
                <div className="oneInformation">Temperatura: {temp} K</div>
                <div className="oneInformation">Wschód słońca: {sunriseTime}</div>
                <div className="oneInformation">Zachód słońca: {sunsetTime}</div>
                <div className="oneInformation">Ciśnienie: {pressure} hPa</div>
                <div className="oneInformation">Wiatr: {wind} m/s</div>
            </div>
        )
    }


    return (
        <div>
            {err ? `Nie ma w bazie miasta o nazwie ${city}` : content}
            
        </div>
    )
}

export default Result;