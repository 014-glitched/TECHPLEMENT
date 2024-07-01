const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById( 'searchBtn' );
const weather_img = document.querySelector('.weather-img'); 
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById('humidity');
const loc =  document.querySelector('.locations') ;
const w_body = document.querySelector('.weather');

async function checkWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '743791b8famshecfc302c7b44bacp17495bjsn4993fb37fc61',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};


try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.cod != '404') {
        
        loc.style.display = "none";
        w_body.style.display = "flex";
       
    }else{
        loc.style.display = "flex";
        w_body.style.display = "none";
    }

    temperature.innerHTML = `${Math.round(((result.main.temp-32)*5)/9)}°C`;   
    description.innerHTML = `${result.weather[0].description}`;
    humidity.innerHTML = `${result.main.humidity}%`;

    switch (result.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/images/snow.png";
            break;
        case 'Haze':
            weather_img.src = "/images/haze.png";
            break;
    }
} catch (error) {
    console.error(error.message);
    
    }
}
searchBtn.addEventListener('click',()=>{
    let x = checkWeather(inputBox.value);
    console.log(x);
});