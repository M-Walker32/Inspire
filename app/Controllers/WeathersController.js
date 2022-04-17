import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js";
import { Pop } from "../Utils/Pop.js";

function drawWeather() {
  const weather = ProxyState.weather
  document.getElementById('weather').innerHTML = weather.WTemplate
}

async function _getWeather() {
  try {
    await weathersService.getWeather()
  } catch (error) {
    console.log(error)
    Pop.toast(error.message, 'error')
  }
}

export class WeathersController {
  constructor() {
    ProxyState.on('weather', drawWeather)
    _getWeather()
    // drawWeather()
  }

  // I think this needs to be true / false like the tasks

  convert() {
    let temp = ProxyState.weather.temp
    // debugger
    if (ProxyState.weather.degree) {
      temp = Math.floor((temp - 32) * (5 / 9))
      ProxyState.weather.temp = temp
      ProxyState.weather.degree = !ProxyState.weather.degree
      document.getElementById('weather').innerHTML = temp.toFixed(2)
      // console.log(temp, ProxyState.weather.temp, ProxyState.weather.degree)s
      drawWeather()
    }
    else if (!ProxyState.weather.degree) {
      temp = (temp * (9 / 5)) + 32
      ProxyState.weather.temp = temp
      ProxyState.weather.degree = !ProxyState.weather.degree
      document.getElementById('weather').innerHTML = temp.toFixed(2)
      // console.log(temp, ProxyState.weather.temp, ProxyState.weather.degree)
      drawWeather()
    }
  }
}