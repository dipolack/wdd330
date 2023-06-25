const APIKey = `?id=5128638&units=imperial&appid=3ec1b0ca25ef101d1e85e1c4347a99f8`;
const urlTodayWeather = `https://api.openweathermap.org/data/2.5/weather${APIKey}`;
const url3jsonForcast = `https://api.openweathermap.org/data/2.5/forecast${APIKey}`;

function init() {
    fetchCurrentReport();
    fetchThreeDayjsonForcastReport();
}

function fetchCurrentReport() {
    fetch(urlTodayWeather)
        .then((res) => res.json())
        .then((objectReturn) => {

            let current = objectReturn.weather[0].main + " ( " + objectReturn.weather[0].description + " )";
            document.getElementById('d-current').textContent = current;
            let temp = objectReturn.main.temp;
            document.getElementById('d-temp').textContent = parseInt(temp);
            let humidity = objectReturn.main.humidity;
            document.getElementById('d-humid').textContent = humidity;
        });
}


function fetchThreeDayjsonForcastReport() {

    fetch(url3jsonForcast)
        .then((res) => res.json())
        .then((objectReturn) => {
            let jsonForcast = objectReturn.list;
            let threeDay = [];

            console.log("jsonForcast.length" + jsonForcast.length)
    
            for (let i = 0; i < 22; i++) {
                if (i % 7 == 0) {
                    let f = {
                        fIcon: jsonForcast[i].weather[0].icon,
                        fDesc: jsonForcast[i].weather[0].description,
                        fTemp: parseInt(jsonForcast[i].main.temp),
                        fDate: jsonForcast[i].dt_txt.slice(0, 10)
                    };
                    console.log("f=" + f);
                    threeDay.push(f);
                }
            }
            console.log(threeDay.length);

            for (let i = 0; i < 3; i++) {

                let o_icon = `https://openweathermap.org/img/w/${threeDay[i].fIcon}.png`;
                let o_desc = threeDay[i].fDesc;
                let o_temp = threeDay[i].fTemp;
                let o_date = threeDay[i].fDate;
                let dayOutput = document.getElementById('day-output');
                let weatherOutput = document.getElementById('weather-output');


                let dayTh = document.createElement('th');
                let weatherInfo =
                    `<td class="forecast-info">
                        <img src="${o_icon}" alt="${o_desc}" class="w-icon">
                        <span>${o_temp} &#176;F</span>
                    </td>`;


                dayTh.textContent = calcDayOfWeek(o_date);

                dayOutput.appendChild(dayTh);
                weatherOutput.insertAdjacentHTML('beforeend', weatherInfo);
            }

            function calcDayOfWeek(date) {
                let dayOfWeek = new Date(date).toLocaleString('en-us', { weekday: 'long' });
                return dayOfWeek;
            }
        });

}


document.addEventListener('DOMContentLoaded', init);