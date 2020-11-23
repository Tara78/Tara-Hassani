//Insert your API key here
//API key 
const apiKey = '8ba8157c8f9c786166631ade41fce81c'; 

// Declare btn to js and create eventListnere
let button=document.querySelector('button'); 
button.addEventListener('click', function(ev){
    ev.preventDefault(); 
 
    
// Declare input info to JS and printing the (CityName ) variable  - 
    const input = document.querySelector('input');
    const cityName = input.value;
    console.log(cityName);
    getWeatherInformation(cityName);
}
);

//Making a function by connecting the information of the city with (URL)by using fetch method!
function getWeatherInformation(cityName) {
    
    
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

fetch(url).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);

//Declare varible and connectig to HTML/ Files can be uploaded using an HTML. 
let temperatureDescribtion= document.querySelector('.temperature-describtion'); 
let temperatureDegree = document.querySelector('.temperature-degree'); 
let windSpeedness= document.querySelector('.wind-speed'); 
let humidityInatmospher= document.querySelector('.humidity'); 
let img= document.querySelector('img');


//Using the variable which I made it before and make a formula for gathering all data from url.
const tempeture= data.main.temp; 
const humidity= data.main.humidity; 
const windSpeed= data.wind.speed; 
const discribtion= data.weather[0].main; 

// Set DOM elements from API 
// Using Icon API img. Adding the cityName and the weather condition (which we found all info from API) 
const icon= `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; 

   temperatureDegree.innerText = tempeture;
   humidityInatmospher.innerText = humidity;
   windSpeedness.innerText = windSpeed;
   temperatureDescribtion.innerText = discribtion;
    img.src = icon;


// Using catch method with a different explanation incase if they put wrong name of the city or if the  
//if the user types some irrelevant text!  

}).catch(function (error) 
{
    console.log(error,'Some thing wrong!!!'); 
}); 
}