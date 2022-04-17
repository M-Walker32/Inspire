export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.temp = Math.floor((data.main.temp - 273.15) * 9 / 5 + 32)
    this.degree = true
  }

  get WTemplate() {
    return `
    <h1 class="selectable text-end" onclick="app.weathersController.convert()">${this.temp} ${this.degree ? 'Fº' : 'Cº'}</h1>
  `
  }
}