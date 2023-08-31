import React, { useState, useEffect } from "react";
// import "./WeatherApp.css";
import CardComponent from "../CardComponent.jsx";
import CardDetailComponent from "../CardDetailComponent.jsx";
import MainCard from "../MainCard.jsx";
// import SearchBar from "../SearchBar.jsx"


import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
// import wind_icon from "../Assets/wind.png";
// import humidity_icon from "../Assets/humidity.png";



const WeatherApp = () => {
    let api_key = "7a73f546e23472cce6023cba32b7b261";

    const [data, setData] = useState(null);
    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");

        if (element[0].value === "") {
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let newData = await response.json();
        setData(newData);

        if (newData.weather[0].icon === "01d" || newData.weather[0].icon === "01n") {
            setWicon(clear_icon);
        } else if (newData.weather[0].icon === "02d" || newData.weather[0].icon === "02n") {
            setWicon(cloud_icon);
        } else if (newData.weather[0].icon === "03d" || newData.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        } else if (newData.weather[0].icon === "04d" || newData.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        } else if (newData.weather[0].icon === "09d" || newData.weather[0].icon === "09n") {
            setWicon(rain_icon);
        } else if (newData.weather[0].icon === "010d" || newData.weather[0].icon === "010n") {
            setWicon(rain_icon);
        } else if (newData.weather[0].icon === "013d" || newData.weather[0].icon === "013n") {
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon);
        }
    };

    

    return (
        <div className="container">
            <div className="top-bar">
                {/* <SearchBar onSearch={search} /> */}
                <input type="text" className="cityInput" placeholder="Search" />
                <div className="search-icon" onClick={search}>
                    <img src={search_icon} alt="" />
                </div>
                <div className="weather-image">
                    <img src={wicon} alt="" />
                </div>
                
                <div className="data-container">
                    <CardComponent>
                        {data && <MainCard data={data} />}
                        {data && <CardDetailComponent data={data} />}
                    </CardComponent>
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
