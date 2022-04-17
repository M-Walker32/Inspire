export class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
    this.description = data.description
  }

  get QTemplate() {
    return ` <div class="d-flex row">
    <div class="col-12 text-center"
    <h3>"<i>${this.quote}</i>"</h3>
  <h5 class="on-hover text-center">${this.author}</h5>
  </div>
  </div>
  `
  }
}