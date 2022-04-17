export class Weather {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.temp = data.main.temp
    this.degree = true
  }

  get WTemplate() {
    return `
    <h1>${this.temp}º</h1>
    <button class="btn btn-primary" onclick="app.weathersController.convert()">Convert</button>
  `
  }
}