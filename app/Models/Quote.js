export class Quote {
  constructor(data) {
    this.quote = data.content
    this.author = data.author
    this.description = data.description
  }

  get QTemplate() {
    return `<h3>"<i>${this.quote}</i>"</h3>
  <h5 class="on-hover">Author: ${this.author}</h5>
  `
  }
}