import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {
  // You're successfully grabbing weather from the api but it doesnt like your Template 
  debugger
  const weather = ProxyState.weather
  document.getElementById('weather').innerHTML = weather.Template
}

export class WeatherController {
  constructor() {
    ProxyState.on('weather', this.getWeather)
    ProxyState.on('weather', _drawWeather)
    this.getWeather()
    _drawWeather()
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.log(error)
      Pop.toast(error.message)
    }
  }

  async convert() {
    // convert weather to F or C
  }
}