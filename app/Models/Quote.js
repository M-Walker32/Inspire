export class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
    this.description = data.description
  }

  get QTemplate() {
    return ` <div class="d-flex row">
    <div class="col-12"
    <h3>"<i>${this.quote}</i>"</h3>
  <h5 class="on-hover">${this.author}</h5>
  </div>
  </div>
  `
  }
}