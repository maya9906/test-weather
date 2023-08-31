export default function CardDetailComponent({ data }) {
    const weatherIcon = data.weather[0].icon; 
    console.log (data)
    
    return (
        <div>

            <div className="card-container">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Humidity</h5>
                <div>
                    <img src={weatherIcon} alt="Weather Icon" width="100" height="100" />
                    <span className="text-2xl text-white feels-like">{Math.floor(data.main.humidity)}%</span>
                </div>
                
            </div>

            <div className="card-container">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Wind Speed</h5>
                <div>
                    <img src={weatherIcon} alt="Weather Icon" width="100" height="100" />
                    <span className="text-2xl text-white feels-like">{Math.floor(data.wind.speed)}km/h</span>
                </div>
                
            </div>

            <div className="card-container">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Maximum Temprature</h5>
                <div>
                    <img src={weatherIcon} alt="Weather Icon" width="100" height="100" />
                    <span className="text-2xl text-white feels-like">{Math.floor(data.main.temp_max)}°C</span>
                </div>
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Minimum Temprature</h5>
                <div>
                    <img src={weatherIcon} alt="Weather Icon" width="100" height="100" />
                    <span className="text-2xl text-white feels-like">{Math.floor(data.main.temp_min)}°C</span>
                </div>
                
            </div>

            <div className="card-container">
                <h5 className="mb-2 text-xs font-bold tracking-tight text-white">Feels Like</h5>
                <div>
                    <img src={weatherIcon} alt="Weather Icon" width="100" height="100" />
                    <span className="text-2xl text-white feels-like">{Math.floor(data.main.feels_like)}°C</span>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">{data.weather[0].description}</p>
            </div>
        </div>


);




// export default function CardDetailComponent({ data}) {
//     console.log("carddetail", data)
//     return (
//         <div className="card-container">
//             <h5 class="mb-2 text-xs font-bold tracking-tight text-white">Feels Like</h5>
//             <div><img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600" />
//                 <span className=" text-2xl text-white feels-like">12℃</span>
//             </div>
//             <p class="font-normal text-gray-700 dark:text-gray-400">description</p>
//         </div>
//     )
// }
    
}
