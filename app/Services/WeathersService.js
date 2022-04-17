import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { inspireService } from "./AxiosService.js";

class WeathersService {
  async getWeather() {
    // debugger
    const res = await inspireService.get('weather')
    console.log(res)
    const weather = new Weather(res.data)
    console.log(weather)
    ProxyState.weather = weather
  }
}

export const weathersService = new WeathersService()