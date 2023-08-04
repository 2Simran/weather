const API_KEY = `0062e6ef45968506259baf2c07953437`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = `<h3> Loading...</h3>`

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
    // console.log(data);
}

const showWeather = (data) => {
    // console.log(data)
    if (data.cod == "404") { //for 404 error page if user entered wrong city then it will appear
        weather.innerHTML = `<h2> Entered City Not Found</h2>`
        return;
    };


    weather.innerHTML = `
    <div class= "glass">
        <div class="container text-center">
             <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div class="row">
                <divclass="col"><h2>Temp: ${data.main.temp}℃</h2></divclass=>
                <divclass="col"><h4>Weather: ${data.weather[0].main} </h4></divclass=>
                <divclass="col"><h4>Humidity:${data.main.humidity}</h4></divclass=>
            </div>
        </div>

        <div class="container text-center">
            <div class="row">
                <div class="col">Latitude: ${data.coord.lat} </div>
                <div class="col">Longitude: ${data.coord.lon} </div>
            </div>

            <div class="row">
                <div class="col">Sunrise: ${data.sys.sunrise} </div>
                <div class="col">Sunset: ${data.sys.sunset} </div>
            </div>

            <div class="row">
                <div class="col">Feels Like:  ${data.main.feels_like}</div>
                <div class="col">Temp Max:  ${data.main.temp_max}</div>
                <div class="col">Temp Min:  ${data.main.temp_min}</div>
            </div>
        </div>

    </div>
    `
    // update background image accorging to weather condition
const weatherCondition = data.weather[0].main.toLowerCase();
if (weatherCondition.includes('clouds')){
    document.body.style.backgroundImage ="url(https://w.forfun.com/fetch/15/151684a2fbab2b601cbfe037dbd39b03.jpeg)";
} else if (weatherCondition.includes('rain')){
    document.body.style.backgroundImage ="url(https://wallpaperaccess.com/full/664528.jpg)";
}else if(weatherCondition.includes('haze')){
    document.body.style.backgroundImage="url(https://www.chainlaw.com/wp-content/uploads/Fog-1-Photo-by-Annie-Spratt-Blog.jpg)";
}else if (weatherCondition.includes('clear')){
    document.body.style.backgroundImage="url(https://wallpaperaccess.com/full/175932.jpg)";
}else if (weatherCondition.includes('drizzle')){
    document.body.style.backgroundImage ="url(https://www.maketecheasier.com/assets/uploads/2021/11/Featured-Image-Live-Weather-Wallpapers-Android.jpg)";
}else if (weatherCondition.includes('mist')){
document.body.style.backgroundImage ="url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg)";
}else if (weatherCondition.includes('thunderstorm')){
    document.body.style.backgroundImage="url(https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Image-HD.jpg)";
}else{
document.body.style.backgroundImage ="url(https://www.allaboutgardening.com/wp-content/uploads/2021/08/Butterfly-on-Flower-Feeding.jpg)";

}

};


form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
);
