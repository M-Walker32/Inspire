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
    console.log(temp, ProxyState.weather.temp, ProxyState.weather.degree)
    if (ProxyState.weather.degree) {
      (temp - 273.15) + 'C'
      ProxyState.weather.temp = temp
      document.getElementById('weather').innerHTML = temp
    }
    else {
      (temp - 273.15) * 9 / 5 + 32 + 'F'
      document.getElementById('weather').innerHTML = temp
      ProxyState.weather.temp = temp
    }
    drawWeather()
    ProxyState.weather.degree = !ProxyState.weather.degree
  }
}