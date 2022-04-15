export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.temp = data.main.temp
    this.weather = data.weather.description
  }

  get Template() {
    return `
<div>
<h1>${this.temp}º</h1>
<h5 class="mdi mdi-weather-cloudy">${this.weather}</h5>
</div>
`
  }

}