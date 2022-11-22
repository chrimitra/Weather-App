const api = {
    key: "af8fa6e2145d08221dc607f8ccf70c9b",
    base: "https://api.openweathermap.org/data/2.5/",   
}

const searchbox = document.querySelector('.search-box'); // 
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) { // 13 sta per l'invio o enter della tastiera
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}


function getResults(query) { // fetch è un metodo di JS per fare una richiesta al server e di caricare le info nella pagina
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) // li passiamo il query che è il parametro
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}



function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
    console.log(weather.weather[0].main);

    let weather_desc = document.querySelector('.current .description');
    weather_desc.innerText = weather.weather[0].description;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${weather.main.temp_min}°C/${weather.main.temp_max}°C`;

    // background image changer
    if(weather.weather[0].main == "Clouds"){
        document.body.style.backgroundImage = "url('Assets/Images/cloudy.jpg')";
    } else if (weather.weather[0].main == "Rain") {
        document.body.style.backgroundImage = "url('Assets/Images/rain.jpg')";
    } else if (weather.weather[0].main == "Clear") {
        document.body.style.backgroundImage = "url('Assets/Images/sunny.jpg')";
    } else if (weather.weather[0].main == "Mist") {
        document.body.style.backgroundImage = "url('Assets/Images/mist.jpg')";
    } else if (weather.weather[0].main == "Snow") {
        document.body.style.backgroundImage = "url('Assets/Images/snow.jpg')";
}
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    let day = days[d.getDay()]; // get the day of the week using local time
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}   

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    
      
    if(hh > 12){
        session = "PM";
    }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  }
  
currentTime();

  