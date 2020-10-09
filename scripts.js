const API = `9c2804010574cc775cfdd281396cff74`
const search = document.querySelector('#search')
const submit = document.querySelector('#submit')
const icon = document.querySelector('#icon')



submit.addEventListener('click', (event) => { 
  const userInput = document.querySelector('#input').value
  event.preventDefault()

fetch(`http://api.openweathermap.org/data/2.5/weather?&q=${userInput}&units=metric&appid=${API}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    const temp = data.main.temp
    const desc = data.weather[0].description
    const emojis = {
      '01d': '☀️',
      '02d': '⛅️',
      '03d': '☁️',
      '04d': '☁️',
      '09d': '🌧',
      '10d': '🌦',
      '11d': '⛈',
      '13d': '❄️',
      '50d': '💨',
      '01n': '☀️',
      '02n': '⛅️',
      '03n': '☁️',
      '04n': '☁️',
      '09n': '🌧',
      '10n': '🌦',
      '11n': '⛈',
      '13n': '❄️',
      '50n': '💨',
    };
    const icon = emojis[data.weather[0].icon]
    
    
    document.querySelector('#city').innerHTML = `Weather in ${userInput}`
    document.querySelector('#weather').innerHTML = `${desc}`
    document.querySelector('#temp').innerHTML = `${temp}°`
    document.querySelector('#icon').innerHTML = `${icon}`
  })
  
})